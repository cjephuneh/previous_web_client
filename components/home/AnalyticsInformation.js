/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import BannerImage from "../../images/bannerimage.jpg";
import CommunicationChannels from "../../images/communicationchannels.jpeg";
import CumulativeAnalytics from "../../images/cumulativeanalytics.jpeg";
import HourlyEngagement from "../../images/hourlyengagement.webp";
function AnalyticsInformation() {
  return (
    <div className="grid grid-cols-3">
      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
        <div className="relative h-80 w-80">
          <Image
            src={CumulativeAnalytics}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h3 className="text-2xl mt-3 text-gray-900">
          Cumulative Interaction Analysis
        </h3>
      </div>
      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
        <div className="relative h-80 w-80">
          <Image
            src={HourlyEngagement}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h3 className="text-2xl mt-3 text-gray-900">
          {" "}
          Hourly Engagement Status
        </h3>
      </div>
      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
        <div className="relative h-80 w-80">
          <Image
            src={CommunicationChannels}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h3 className="text-2xl mt-3 text-gray-900">Communication Channels</h3>
      </div>
      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
        <div className="relative h-80 w-80">
          <Image
            src={BannerImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h3 className="text-2xl mt-3 text-gray-900">Interaction Trend</h3>
      </div>
      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
        <div className="relative h-80 w-80">
          <Image
            src={BannerImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h3 className="text-2xl mt-3 text-gray-900">Frequency of Engagement</h3>
      </div>
      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-4">
        <div className="relative h-80 w-80">
          <Image
            src={BannerImage}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h3 className="text-2xl mt-3 text-gray-900">Nature of Interaction</h3>
      </div>
    </div>
  );
}

export default AnalyticsInformation;
