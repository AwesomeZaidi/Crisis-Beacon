import React, { useState, useEffect } from 'react';
import { fetchBeacons } from './data/api/beacons';
import { FETCH_STATUSES } from './data/base/types';
import './styles/styles.scss';
import logo from './assets/logo.png';

import MapSection from './MapSection';

const Home = () => {

    const [fetchAllStatus, setFetchAllStatus] = useState(FETCH_STATUSES.OK);
    const [data, setData] = useState(null);
    const  [showMap, setShowMap] = useState(false);

    useEffect(() => {
        _fetchBeacons()
    }, [])

    const _fetchBeacons = async () =>  {
        setFetchAllStatus(FETCH_STATUSES.LOADING)
        try {
            const data = await fetchBeacons();
            setFetchAllStatus(FETCH_STATUSES.OK)
    console.log('data;',data)
            setData(data)
        } catch (e) {
            setFetchAllStatus(FETCH_STATUSES.ERROR)
        }
    }

    const toggleMap = () => {
        setShowMap(!showMap)
    }

    return (
        <div className={!showMap  ? 'home' : ''}>
            {
                showMap ?
                <MapSection
                    data={data}
                    fetchAllStatus={fetchAllStatus}
                />
                :
                <>
                    <img
                        src={logo}
                        alt='Crisis Beacon'
                        className='home-logo'
                    />

                    <button
                        className='btn-primary'
                        onClick={toggleMap}
                    >
                        SHOW MAP
                    </button>
                </>
            }
        </div>  
    )
}

export default Home;