import React from "react";
import Star from "../public/assets/Group 39866.png";
import Check from "../public/assets/check-circle.png";
import Image from "next/image";
import Exclamation from "../public/assets/exclamation-circle.png";



const SelectSubcription = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#000",
        width: "1600px",
        height: "1091px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "18px",
        color: "#000",
        fontFamily: "Inter",
        left:"70px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "1600px",
          height: "1091px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "#fafafb",
            width: "1600px",
            height: "1091px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "1600px",
            height: "61px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              backgroundColor: "#fff",
              boxShadow: "0px 1px 0px rgba(18, 32, 59, 0.09)",
              width: "1600px",
              height: "61px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "11px",
              left: "325px",
              width: "910px",
              height: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                display: "none",
              }}
            >
              Input Label
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "9px",
              left: "1433px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              color: "#18181b",
              fontFamily: "'Plus Jakarta Sans'",
            }}
          >
            
          </div>
          
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "146px",
          left: "160px",
          width: "1280px",
          display: "flex",
          flexDirection: "column",
          padding: "0px 32px",
          boxSizing: "border-box",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          fontSize: "36px",
          color: "#101828",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            position: "relative",
            gap: "48px",
          }}
        >
          <div
            style={{
              width: "768px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "20px",
              zIndex: "0",
              textAlign: "center",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  letterSpacing: "-0.02em",
                  lineHeight: "44px",
                  fontWeight: "600",
                }}
              >
                Select a plan
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#667085",
              }}
            >
              To proceed, you will have to select a plan
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "24px",
              zIndex: "1",
              fontSize: "16px",
              color: "#191d23",
            }}
          >
            {/* <div
              style={{ position: "relative", fontWeight: "300" }}
            >{`Pay Monthly `}</div>
            <div
              style={{ position: "relative", width: "44px", height: "24px" }}
            >
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(4, 9, 33, 0.32)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 10px)",
                  left: "2px",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
              }}
            >
              <div style={{ position: "relative", fontWeight: "300" }}>
                Pay Yearly
              </div>
              {/* <Image
                style={{
                  position: "relative",
                  width: "68px",
                  height: "12.04px",
                }}
                alt=""
                src={Star}
              /> */}
            
          </div>
          <div 
            style={{
              position: "absolute",
              margin: "0",
              top: "131px",
              right: "265px",
              width: "190px",
              height: "87.33px",
              zIndex: "2",
              fontSize: "18px",
              color: "#53b4b0",
            }}
          >
            <Image
              style={{
                position: "absolute",
                top: "0px",
                right: "83.7px",
                width: "106.31px",
                height: "87.32px",
              }}
              alt=""
              src={Star}
            />
            {/* <b style={{ position: "absolute", top: "51px", right: "0px" }}>
              Save 25%
            </b> */}
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "357px",
          left: "50px",
          width: "1498px",
          height: "1125px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "10px",
          color: "#777576",
          fontFamily: "Manrope",
        }}
      >
        <div
          style={{ position: "relative", width: "374.5px", height: "598px" }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "6px",
              width: "374.5px",
              height: "598px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "503.96px",
              left: "35.99px",
              borderRadius: "5px",
              backgroundColor: "#2dabb1",
              width: "253.49px",
              height: "55px",
              display: "flex",
              flexDirection: "column",
              padding: "16px",
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "right",
              color: "#fff",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "9px",
              }}
            > 
              <a
                  href="https://app.proximaai.co/"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
              <div style={{ position: "relative", lineHeight: "24px" }}>
                Get 30 Days Free Trial
              </div>
              <div
                style={{
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "18px",
                    height: "18px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/iconoutlinearrowright.svg"
                />
              </div>
              </a>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "268px",
              left: "36.51px",
              width: "272.79px",
              height: "200px",
              fontFamily: "Inter",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "272.79px",
                height: "24px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "27.38px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "215.92px",
                }}
              >
                Full Access to Landingfolio
              </div>
              <Image
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "0px",
                  width: "21.06px",
                  height: "20px",
                  overflow: "hidden",
                }}
                alt=""
                src={Check}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "3px",
                  left: "253.83px",
                  width: "18.96px",
                  height: "18px",
                  overflow: "hidden",
                }}
                alt=""
                src={Exclamation}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "44px",
                left: "0px",
                width: "223.29px",
                height: "24px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "27.38px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "166.41px",
                }}
              >
                100 GB Free Storage
              </div>
              <Image
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "0px",
                  width: "21.06px",
                  height: "20px",
                  overflow: "hidden",
                }}
                alt=""
                src={Check}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "3px",
                  left: "204.33px",
                  width: "18.96px",
                  height: "18px",
                  overflow: "hidden",
                }}
                alt=""
                src={Exclamation}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "88px",
                left: "0px",
                width: "169.57px",
                height: "24px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "27.38px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "142.19px",
                }}
              >
                Unlimited Visitors
              </div>
              <Image
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "0px",
                  width: "21.06px",
                  height: "20px",
                  overflow: "hidden",
                }}
                alt=""
                src={Check}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "132px",
                left: "0px",
                width: "108.48px",
                height: "24px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "27.38px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "81.1px",
                }}
              >
                10 Agents
              </div>
              <Image
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "0px",
                  width: "21.06px",
                  height: "20px",
                  overflow: "hidden",
                }}
                alt=""
                src={Check}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "176px",
                left: "0px",
                width: "206.44px",
                height: "24px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "27.38px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "145.35px",
                }}
              >
                Live Chat Support
              </div>
              <Image
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "0px",
                  width: "21.06px",
                  height: "20px",
                  overflow: "hidden",
                }}
                alt=""
                src={Check}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "3px",
                  left: "187.48px",
                  width: "18.96px",
                  height: "18px",
                  overflow: "hidden",
                }}
                alt=""
                src={Exclamation}
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "31px",
              left: "36.51px",
              width: "46.94px",
              height: "30px",
              fontSize: "18px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                lineHeight: "30px",
                display: "flex",
                alignItems: "center",
                width: "46.94px",
              }}
            >
              Basic
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "158.96px",
              left: "37.03px",
              lineHeight: "24px",
              color: "#a1a1aa",
              display: "inline-block",
              width: "240.97px",
            }}
          >
            All the basic features to boost organization’s functionality
          </div>
          <div
            style={{
              position: "absolute",
              top: "75px",
              left: "30px",
              width: "178.64px",
              height: "66px",
              fontSize: "60px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                lineHeight: "66px",
                display: "flex",
                alignItems: "center",
                width: "113px",
              }}
            >
              $50
            </div>
            <div
              style={{
                position: "absolute",
                top: "38px",
                left: "118.13px",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#71717a",
                display: "inline-block",
                width: "60.5px",
              }}
            >
              / month
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "237.46px",
              left: "35.49px",
              borderTop: "1px solid #27272a",
              boxSizing: "border-box",
              width: "254.49px",
              height: "1px",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "357px",
            height: "598px",
            color: "#979c9e",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "6px",
              backgroundColor: "#edfeff",
              width: "357px",
              height: "598px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "504px",
              left: "25.25px",
              borderRadius: "5px",
              backgroundColor: "#53b4b0",
              width: "292px",
              height: "55px",
              display: "flex",
              flexDirection: "column",
              padding: "16px",
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "right",
              color: "#fdfbff",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "9px",
              }}
            >
              <a
                  href="https://app.proximaai.co/"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
              <div style={{ position: "relative", lineHeight: "24px" }}>
                Get 30 Days Free Trial
              </div>
              <div
                style={{
                  display: "none",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "18px",
                    height: "18px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/iconoutlinearrowright1.svg"
                />
              </div>
              </a>

            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "268px",
              left: "26.25px",
              width: "259px",
              height: "200px",
              fontFamily: "Inter",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "259px",
                height: "24px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "26px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "205px",
                }}
              >
                Full Access to Landingfolio
              </div>
              <Image
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "0px",
                  width: "20px",
                  height: "20px",
                  overflow: "hidden",
                }}
                alt=""
                src={Check}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "3px",
                  left: "241px",
                  width: "18px",
                  height: "18px",
                  overflow: "hidden",
                }}
                alt=""
                src={Exclamation}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "44px",
                left: "0px",
                width: "212px",
                height: "24px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "26px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "158px",
                }}
              >
                100 GB Free Storage
              </div>
              <Image
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "0px",
                  width: "20px",
                  height: "20px",
                  overflow: "hidden",
                }}
                alt=""
                src={Check}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "3px",
                  left: "194px",
                  width: "18px",
                  height: "18px",
                  overflow: "hidden",
                }}
                alt=""
                src={Exclamation}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "88px",
                left: "0px",
                width: "161px",
                height: "24px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "26px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "135px",
                }}
              >
                Unlimited Visitors
              </div>
              <Image
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "0px",
                  width: "20px",
                  height: "20px",
                  overflow: "hidden",
                }}
                alt=""
                src={Check}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "132px",
                left: "0px",
                width: "103px",
                height: "24px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "26px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "77px",
                }}
              >
                10 Agents
              </div>
              <Image
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "0px",
                  width: "20px",
                  height: "20px",
                  overflow: "hidden",
                }}
                alt=""
                src={Check}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "176px",
                left: "0px",
                width: "196px",
                height: "24px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "26px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "138px",
                }}
              >
                Live Chat Support
              </div>
              <Image
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "0px",
                  width: "20px",
                  height: "20px",
                  overflow: "hidden",
                }}
                alt=""
                src={Check}
              />
              <Image
                style={{
                  position: "absolute",
                  top: "3px",
                  left: "178px",
                  width: "18px",
                  height: "18px",
                  overflow: "hidden",
                }}
                alt=""
                src={Exclamation}
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "31px",
              left: "26.25px",
              width: "104px",
              height: "30px",
              fontSize: "18px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                lineHeight: "30px",
                display: "flex",
                alignItems: "center",
                width: "104px",
              }}
            >
              Professional
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "159px",
              left: "26.25px",
              lineHeight: "24px",
              color: "#a1a1aa",
              display: "inline-block",
              width: "259px",
            }}
          >
            All the basic features to boost your freelance career
          </div>
          <div
            style={{
              position: "absolute",
              top: "75px",
              left: "19.5px",
              width: "219px",
              height: "66px",
              fontSize: "60px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                lineHeight: "66px",
                display: "flex",
                alignItems: "center",
                width: "150px",
              }}
            >
              $150
            </div>
            <div
              style={{
                position: "absolute",
                top: "42px",
                left: "136px",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#71717a",
                display: "inline-block",
                width: "83px",
              }}
            >
              / Quarterly
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "237.5px",
              left: "25.75px",
              borderTop: "1px solid #27272a",
              boxSizing: "border-box",
              width: "292px",
              height: "1px",
            }}
          />
        </div>
        <div style={{ position: "relative", width: "359px", height: "598px" }}>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "359px",
              height: "598px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "6px",
                backgroundColor: "#fff9e2",
                width: "359px",
                height: "598px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "504px",
                left: "34px",
                borderRadius: "5px",
                backgroundColor: "#2dabb1",
                width: "292px",
                height: "55px",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                boxSizing: "border-box",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "right",
                color: "#fff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "9px",
                }}
              >
                <a
                  href="https://app.proximaai.co/"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                <div style={{ position: "relative", lineHeight: "24px" }}>
                  Get 30 Days Free Trial
                </div>
                <div
                  style={{
                    display: "none",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{
                      position: "relative",
                      width: "18px",
                      height: "18px",
                      overflow: "hidden",
                      flexShrink: "0",
                    }}
                    alt=""
                    src="/iconoutlinearrowright2.svg"
                  />
                </div>
                </a>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "268px",
                left: "35px",
                width: "259px",
                height: "200px",
                fontFamily: "Inter",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "259px",
                  height: "24px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "26px",
                    lineHeight: "24px",
                    fontWeight: "500",
                  }}
                >
                  Full Access to Landingfolio
                </div>
                <Image
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Check}
                />
                <Image
                  style={{
                    position: "absolute",
                    top: "3px",
                    left: "241px",
                    width: "18px",
                    height: "18px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Exclamation}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "44px",
                  left: "0px",
                  width: "212px",
                  height: "24px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "26px",
                    lineHeight: "24px",
                    fontWeight: "500",
                  }}
                >
                  100 GB Free Storage
                </div>
                <Image
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Check}
                />
                <Image
                  style={{
                    position: "absolute",
                    top: "3px",
                    left: "194px",
                    width: "18px",
                    height: "18px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Exclamation}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "88px",
                  left: "0px",
                  width: "161px",
                  height: "24px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "26px",
                    lineHeight: "24px",
                    fontWeight: "500",
                  }}
                >
                  Unlimited Visitors
                </div>
                <Image
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Check}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "132px",
                  left: "0px",
                  width: "103px",
                  height: "24px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "26px",
                    lineHeight: "24px",
                    fontWeight: "500",
                  }}
                >
                  10 Agents
                </div>
                <Image
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Check}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "176px",
                  left: "0px",
                  width: "196px",
                  height: "24px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "26px",
                    lineHeight: "24px",
                    fontWeight: "500",
                  }}
                >
                  Live Chat Support
                </div>
                <Image
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Check}
                />
                <Image
                  style={{
                    position: "absolute",
                    top: "3px",
                    left: "178px",
                    width: "18px",
                    height: "18px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Exclamation}
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "31px",
                left: "35px",
                width: "76px",
                height: "30px",
                fontSize: "18px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  lineHeight: "30px",
                }}
              >
                Business
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "159px",
                left: "35px",
                lineHeight: "24px",
                color: "#a1a1aa",
                display: "inline-block",
                width: "259px",
              }}
            >
              All the basic features to boost your freelance career
            </div>
            <div
              style={{
                position: "absolute",
                top: "75px",
                left: "34px",
                width: "260.5px",
                height: "66px",
                fontSize: "60px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  lineHeight: "66px",
                }}
              >
                $300
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "37.96px",
                  left: "174.5px",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#71717a",
                }}
              >
                / Half a year
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "237.5px",
                left: "34.5px",
                borderTop: "1px solid #27272a",
                boxSizing: "border-box",
                width: "292px",
                height: "1px",
              }}
            />
          </div>
        </div>
        <div style={{ position: "relative", width: "359px", height: "598px" }}>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "359px",
              height: "598px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "6px",
                backgroundColor: "#beb9ff",
                width: "359px",
                height: "598px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "504px",
                left: "34px",
                borderRadius: "5px",
                backgroundColor: "#2dabb1",
                width: "292px",
                height: "55px",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                boxSizing: "border-box",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "right",
                color: "#fff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "9px",
                }}
              >
                <a
                  href="https://app.proximaai.co/"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                <div style={{ position: "relative", lineHeight: "24px" }}>
                  Get 30 Days Free Trial
                </div>
                <div
                  style={{
                    display: "none",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{
                      position: "relative",
                      width: "18px",
                      height: "18px",
                      overflow: "hidden",
                      flexShrink: "0",
                    }}
                    alt=""
                    src="/iconoutlinearrowright2.svg"
                  />
                </div>
                </a>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "268px",
                left: "35px",
                width: "259px",
                height: "200px",
                fontFamily: "Inter",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "259px",
                  height: "24px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "26px",
                    lineHeight: "24px",
                    fontWeight: "500",
                  }}
                >
                  Full Access to Landingfolio
                </div>
                <Image
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Check}
                />
                <Image
                  style={{
                    position: "absolute",
                    top: "3px",
                    left: "241px",
                    width: "18px",
                    height: "18px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Exclamation}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "44px",
                  left: "0px",
                  width: "212px",
                  height: "24px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "26px",
                    lineHeight: "24px",
                    fontWeight: "500",
                  }}
                >
                  100 GB Free Storage
                </div>
                <Image
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Check}
                />
                <Image
                  style={{
                    position: "absolute",
                    top: "3px",
                    left: "194px",
                    width: "18px",
                    height: "18px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Exclamation}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "88px",
                  left: "0px",
                  width: "161px",
                  height: "24px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "26px",
                    lineHeight: "24px",
                    fontWeight: "500",
                  }}
                >
                  Unlimited Visitors
                </div>
                <Image
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Check}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "132px",
                  left: "0px",
                  width: "103px",
                  height: "24px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "26px",
                    lineHeight: "24px",
                    fontWeight: "500",
                  }}
                >
                  10 Agents
                </div>
                <Image
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Check}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "176px",
                  left: "0px",
                  width: "196px",
                  height: "24px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "26px",
                    lineHeight: "24px",
                    fontWeight: "500",
                  }}
                >
                  Live Chat Support
                </div>
                <Image
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Check}
                />
                <Image
                  style={{
                    position: "absolute",
                    top: "3px",
                    left: "178px",
                    width: "18px",
                    height: "18px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src={Exclamation}
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "159px",
                left: "35px",
                lineHeight: "24px",
                color: "#a1a1aa",
                display: "inline-block",
                width: "259px",
              }}
            >
              All the basic features to boost your freelance career
            </div>
            <div
              style={{
                position: "absolute",
                top: "75px",
                left: "34px",
                width: "215.5px",
                height: "66px",
                fontSize: "60px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  lineHeight: "66px",
                }}
              >
                $600
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "37.96px",
                  left: "174.5px",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#71717a",
                }}
              >
                / Year
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "237.5px",
                left: "34.5px",
                borderTop: "1px solid #27272a",
                boxSizing: "border-box",
                width: "292px",
                height: "1px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSubcription;
