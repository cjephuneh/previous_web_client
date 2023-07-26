import React from "react";
import Star from "../public/assets/Group 39866.png"
import Check from "../public/assets/check-circle.png"
import Image from "next/image";



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
        fontSize: "16px",
        color: "#000",
        fontFamily: "Inter",
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
              fontSize: "36px",
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
              color: "#191d23",
            }}
          >
            <div
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
              <img
                style={{
                  position: "relative",
                  width: "68px",
                  height: "12.04px",
                }}
                alt=""
                src="/line-10.svg"
              />
            </div>
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
            <b style={{ position: "absolute", top: "51px", right: "0px" }}>
              Save 25%
            </b>
          </div>
          <div
            style={{
              position: "relative",
              width: "1137px",
              height: "598px",
              zIndex: "3",
              color: "#777576",
              fontFamily: "Manrope",
            }}
          >
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
                <a href="https://app.proximaai.co/" style={{ textDecoration: "none", color: "#fff" }}>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "9px",
                  }}
                >
                  <div style={{ position: "relative", lineHeight: "24px" }}>
                    Get 14 Days Free Trial
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
                </div>
                </a>
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
                  <img
                    style={{
                      position: "absolute",
                      top: "3px",
                      left: "241px",
                      width: "18px",
                      height: "18px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/iconoutlineexclamationcircle.svg"
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
                  <img
                    style={{
                      position: "absolute",
                      top: "3px",
                      left: "194px",
                      width: "18px",
                      height: "18px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/iconoutlineexclamationcircle.svg"
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
                  <img
                    style={{
                      position: "absolute",
                      top: "3px",
                      left: "178px",
                      width: "18px",
                      height: "18px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/iconoutlineexclamationcircle.svg"
                  />
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "31px",
                  left: "35px",
                  width: "45px",
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
                  Basic
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
                All the basic features to boost organization’s functionality
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "75px",
                  left: "34px",
                  width: "166px",
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
                  $19
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "38px",
                    left: "108px",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#71717a",
                  }}
                >
                  / month
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
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "389px",
                width: "359px",
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
                <a href="https://app.proximaai.co/" style={{ textDecoration: "none", color: "#fff" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "9px",
                  }}
                >
                  <div style={{ position: "relative", lineHeight: "24px" }}>
                    Get 14 Days Free Trial
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
                </div>
                </a>
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
                  <img
                    style={{
                      position: "absolute",
                      top: "3px",
                      left: "241px",
                      width: "18px",
                      height: "18px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/iconoutlineexclamationcircle.svg"
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
                  <img
                    style={{
                      position: "absolute",
                      top: "3px",
                      left: "194px",
                      width: "18px",
                      height: "18px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/iconoutlineexclamationcircle.svg"
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
                  <img
                    style={{
                      position: "absolute",
                      top: "3px",
                      left: "178px",
                      width: "18px",
                      height: "18px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/iconoutlineexclamationcircle.svg"
                  />
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "31px",
                  left: "35px",
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
                  }}
                >
                  Professional
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
                  width: "166px",
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
                  $49
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "38px",
                    left: "108px",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#71717a",
                  }}
                >
                  / month
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
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "778px",
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
                <a href="https://app.proximaai.co/" style={{ textDecoration: "none", color: "#fff" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "9px",
                  }}
                >
                  <div style={{ position: "relative", lineHeight: "24px" }}>
                    Get 14 Days Free Trial
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
                </div>
                </a>
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
                    src={Check}
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
                  <img
                    style={{
                      position: "absolute",
                      top: "3px",
                      left: "194px",
                      width: "18px",
                      height: "18px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/iconoutlineexclamationcircle.svg"
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
                  <img
                    style={{
                      position: "absolute",
                      top: "3px",
                      left: "178px",
                      width: "18px",
                      height: "18px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/iconoutlineexclamationcircle.svg"
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
                  width: "166px",
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
                  $99
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "38px",
                    left: "108px",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#71717a",
                  }}
                >
                  / month
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
    </div>
  );
};

export default SelectSubcription;
