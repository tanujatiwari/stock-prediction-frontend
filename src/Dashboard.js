import { useState, useEffect } from 'react'
import Main from './Main';
import VerticalNav from './VerticalNav';
import HorizontalNav from './HorizontalNav';
import Header from './Header';
import ChartSection from './ChartSection';
import './Dashboard.css'
import data from './data'
import bargraphData from './barData';

function Dashboard() {
    const [screenSize, setScreenSize] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const updateWindowDimensions = () => {
        setScreenSize(window.innerWidth)
        if (screenSize < '945')
            setIsVisible(false)
        else
            setIsVisible(true)
    }

    useEffect(() => {
        updateWindowDimensions()
        window.addEventListener('resize', updateWindowDimensions);
        window.addEventListener('load', updateWindowDimensions);
        return () => {
            window.removeEventListener('resize', updateWindowDimensions)
            window.removeEventListener('load', updateWindowDimensions)
        }
    }, [screenSize, isVisible, updateWindowDimensions])

    return (
        <>
            <div className="Dashboard">
                <VerticalNav isVisible={isVisible} />
                <Main>
                    <HorizontalNav />
                    <Header />
                    <ChartSection data={data} bargraphData={bargraphData} />
                </Main>
            </div>
        </>
    )
}

export default Dashboard