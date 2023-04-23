import React from 'react';
import { useState, useEffect } from "react";
import './App.css';
import scheduleInterface from "./interfaces/schedule.interface";
import axios, { AxiosInstance } from 'axios';
import {DayName} from "./interfaces/utils.interface";

function App() {
    const axiosClient = axios.create({
        baseURL: `${process.env.REACT_APP_BASE_URL}/schedule`,
        responseType: 'json',
        headers: {
            'content-type': 'application/json',
        },
    });

    const [from, setFrom] = useState<string>("")
    const [to, setTo] = useState<string>("")
    const [schedule, setSchedule] = useState<scheduleInterface[]>([])

    useEffect(() => {
        if (!from || !to) return;
        axiosClient.post("/find", {data: {from_city: from, to_city: to}}).then((res) => {
            setSchedule(res.data.data.res);
            console.log(res.data.data.res);
        }).catch((err: any) => {
            console.error(err.message)
        })
    }, [from, to])

    return (
        <div className="App">
            <div className="Input">
                <label>From:
                    <input
                        type="text"
                        onChange={(e) => setFrom(e.target.value)}/>
                </label>
                <label>To:
                    <input
                        type="text"
                        onChange={(e) => setTo(e.target.value)}/>
                </label>
            </div>
            <div className="Output">
                Available trains: <br/>
                <table>
                    <tr>
                        <th>Train</th>
                        <th>Time</th>
                        <th>Day</th>
                    </tr>
                    {
                        schedule.map((value, index) => {
                            return <tr key={`train-${index}`}>
                                <td>
                                    {value.trainName}
                                </td>
                                <td>
                                    {value.time}
                                </td>
                                <td>
                                    {value.day}
                                </td>
                            </tr>
                        })
                    }
                </table>

            </div>
        </div>
    );
}

export default App;

/*
{
                            Object.keys(DayName).map((day, index) => {
                                return <th key={`${day}-${index}`}>
                                </th>
                            })
                        }

                            {day}: {
                                schedule.map((value, index) => {
                                    if (value.day === day) {
                                        return <div key={`train-${index}`}>
                                            {`-    ${value.trainName} at ${value.time}`}
                                        </div>
                                    } else return null;
                                })
                            }
 */
