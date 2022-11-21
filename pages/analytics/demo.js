import Head from "next/head";
import React from 'react'
import Channelengagementgraph from '../../components/analytics/channelengagementgraph'
import CumulativeHourlyTrend from '../../components/analytics/CumulativeHourlyTrend'
import CumulativeTrends from '../../components/analytics/CumulativeTrends'
import Hourlystatus from '../../components/analytics/hourlystatus'
import MostPopularTopics from '../../components/analytics/MostPopularTopics'
import Userengagementtrend from '../../components/analytics/userengagementtrend'
import Header from "../../components/ui/Header";

function demo() {
  return (
<div className="">
      <Head>
        <title>AnalyticsDemo</title>
      </Head>
      <Header />


      <div className="mx-auto pt-8 ">
        <div className="flex flex-row ">
          <div>
            <CumulativeTrends />
          </div>

          <div className="p-4">
            <div className="flex flex-row">
              <Hourlystatus />
            </div>
            <div className="flex flex-col p-4">
              <div className="p-4">
                <Userengagementtrend />
                <Channelengagementgraph />
              </div>

            </div>
          </div>
        </div>
        <div className="p-4 pt-6 px-12">
            <CumulativeHourlyTrend />
            <MostPopularTopics />
        </div>
      </div>
    </div> 
     )
}

export default demo