import * as React from 'react'
import {UserPage} from './UserPage'
import './info.css'
import {LogPage} from "./LogPage";
/**
 *  2021.01.14 | gomip | created
 */

export const InfoPage: React.FC = () => {
    // State -----------------------------------------------------------------------------------------------------------
    // Function --------------------------------------------------------------------------------------------------------
    // Dom -------------------------------------------------------------------------------------------------------------
    return (
        <div className='info-wrapper'>
            {/* 사용자 정보 시작 */}
            <UserPage />
            {/* 사용자 정보 끝 */}

            {/*/!* 로그 시작 *!/*/}
            {/*<LogPage />*/}
            {/*/!* 로그 끝 *!/*/}
       </div>
    )
}
