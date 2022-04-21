import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "../../../style/index.css";
const SideBarLeft = () => {
  const [sideBarMain, setSideBarMain] = useState(true);
  const [sideBarSub, setSideBarSub] = useState(false);

  const sideBarMainClose = function () {
    setSideBarMain(false);
    setSideBarSub(true);
  };
  const sideBarSubOpen = function () {
    setSideBarMain(true);
    setSideBarSub(false);
  };
  const Container = styled.div`
    background: #fff none repeat scroll 0 0;
    height: 100vh;
    position: fixed;
    width: 60px;
    z-index: 9;
    left: 0;
    display:flex,
    flex-direction: column;
    align-items: center;
  `;
  const ChildMain = styled.div`
    margin-top: 1.5rem;
    min-height: 2.2rem;
    min-width: 2.2rem;
    font-size: 0.5rem;
    border-radius: 100%;
    &:hover .icofont_hover_sidebar_left {
      color: #fa6342;
    }
  `;
  const SideBarSUbChild = styled.div`
    width: 13rem;
    height: 3rem;
    margin-bottom: 1rem;
    color: gray;
    display: flex;
    border-bottom: 0.1px black solid;
    margin-left: 3rem;
    font-size: 0.7rem;
    align-items: center;
    z-index: 1000000000;
    &:hover {
      color: #fa6342;
    }
  `;
  const HoverMenuIcon = styled.div`
    &:hover .icofont_hover_menu {
      color: #fa6342;
    }
  `;
  const HoverMenuIconA = styled.a`
    &:hover {
      color: #fa6342;
    }
  `;
  return (
    <Container>
      {sideBarMain && (
        <div>
          <ChildMain>
            <div
              style={{
                display: "block",
                margin: "0 auto",
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#757a95",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 0 ",
                position: "relative",
              }}
            >
              <HoverMenuIcon
                style={{
                  display: "block",
                  margin: "0 auto",
                  textAlign: "center",
                  width: "2.2rem",
                  height: "2.2rem",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0",
                  margin: "0 0",
                  color: "white",
                }}
              >
                <i
                  class="icofont-navigation-menu icofont_hover_menu"
                  style={{
                    fontSize: "1.3rem",
                    // color: "white",
                    zIndex: "10000",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "0 0",
                  }}
                  onClick={() => sideBarMainClose()}
                ></i>
              </HoverMenuIcon>
            </div>
          </ChildMain>
          <ChildMain>
            <div
            className="IconMenu"
              style={{
                display: "block",
                margin: "0 auto",
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#757a95",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 0 ",
                position: "relative"
              }}
            >
              <HoverMenuIconA
                href=""
                style={{
                  display: "block",
                  margin: "0 auto",
                  textAlign: "center",
                  width: "2.2rem",
                  height: "2.2rem",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0",
                  margin: "0 0",
                  textDecoration: "none",
                }}
              >
                <i
                  class="icofont-newspaper icofont_hover_menu1"
                  style={{
                    fontSize: "1.3rem",
                    color: "white",
                    zIndex: "10000",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "0 0",
                  }}
                ></i>

              </HoverMenuIconA>
                <div className="HoverIconTageName">New Feed</div>
            </div>
          </ChildMain>
          <ChildMain>
            <div
            className="IconMenu"
              style={{
                display: "block",
                margin: "0 auto",
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#757a95",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 0 ",
                position:'relative'
              }}
            >
              <HoverMenuIconA
                href=""
                style={{
                  display: "block",
                  margin: "0 auto",
                  textAlign: "center",
                  width: "2.2rem",
                  height: "2.2rem",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0",
                  margin: "0 0",
                  color: "#fa6342",
                  textDecoration: "none",
                }}
              >
                <i
                  class="icofont-question icofont_hover_menu"
                  style={{
                    fontSize: "1.3rem",
                    color: "white",
                    zIndex: "10000",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "0 0",
                  }}
                ></i>
              </HoverMenuIconA>
              <div className="HoverIconTageName1">Forum</div>
            </div>
          </ChildMain>
          <ChildMain>
            <div
            className="IconMenu"
              style={{
                display: "block",
                margin: "0 auto",
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#757a95",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 0 ",
                position:'relative'
              }}
            >
              <HoverMenuIconA
                href=""
                style={{
                  display: "block",
                  margin: "0 auto",
                  textAlign: "center",
                  width: "2.2rem",
                  height: "2.2rem",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0",
                  margin: "0 0",
                  color: "#fa6342",
                  textDecoration: "none",
                }}
              >
                <i
                  class="icofont-people icofont_hover_menu"
                  style={{
                    fontSize: "1.3rem",
                    color: "white",
                    zIndex: "10000",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "0 0",
                  }}
                ></i>
              </HoverMenuIconA>
              <div className="HoverIconTageName2">Friends</div>
            </div>
          </ChildMain>
          <ChildMain>
            <div
            className="IconMenu"
              style={{
                display: "block",
                margin: "0 auto",
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#757a95",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 0 ",
                position:'relative'
              }}
            >
              <HoverMenuIconA
                href=""
                style={{
                  display: "block",
                  margin: "0 auto",
                  textAlign: "center",
                  width: "2.2rem",
                  height: "2.2rem",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0",
                  margin: "0 0",
                  color: "#fa6342",
                  textDecoration: "none",
                }}
              >
                <i
                  class="icofont-star icofont_hover_menu"
                  style={{
                    fontSize: "1.3rem",
                    color: "white",
                    zIndex: "10000",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "0 0",
                  }}
                ></i>
              </HoverMenuIconA>
              <div className="HoverIconTageName3">Favorite Pages</div>
            </div>
          </ChildMain>
          <ChildMain>
            <div
            className="IconMenu"
              style={{
                display: "block",
                margin: "0 auto",
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#757a95",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 0 ",
                position:'relative'
              }}
            >
              <HoverMenuIconA
                href=""
                style={{
                  display: "block",
                  margin: "0 auto",
                  textAlign: "center",
                  width: "2.2rem",
                  height: "2.2rem",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0",
                  margin: "0 0",
                  color: "#fa6342",
                  textDecoration: "none",
                }}
              >
                <i
                  class="icofont-ui-message icofont_hover_menu"
                  style={{
                    fontSize: "1.3rem",
                    color: "white",
                    zIndex: "10000",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "0 0",
                  }}
                ></i>
              </HoverMenuIconA>
              <div className="HoverIconTageName4">Messages</div>
            </div>
          </ChildMain>
          <ChildMain>
            <div
            className="IconMenu"
              style={{
                display: "block",
                margin: "0 auto",
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#757a95",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 0 ",
                position:'relative'
              }}
            >
              <HoverMenuIconA
                href=""
                style={{
                  display: "block",
                  margin: "0 auto",
                  textAlign: "center",
                  width: "2.2rem",
                  height: "2.2rem",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0",
                  margin: "0 0",
                  color: "#fa6342",
                  textDecoration: "none",
                }}
              >
                <i
                  class="icofont-notification icofont_hover_menu"
                  style={{
                    fontSize: "1.3rem",
                    color: "white",
                    zIndex: "10000",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "0 0",
                  }}
                ></i>
              </HoverMenuIconA>
              <div className="HoverIconTageName5">Notification</div>
            </div>
          </ChildMain>
          <ChildMain>
            <div
            className="IconMenu"
              style={{
                display: "block",
                margin: "0 auto",
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#757a95",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 0 ",
                position:'relative'
              }}
            >
              <HoverMenuIconA
                href=""
                style={{
                  display: "block",
                  margin: "0 auto",
                  textAlign: "center",
                  width: "2.2rem",
                  height: "2.2rem",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0",
                  margin: "0 0",
                  color: "#fa6342",
                  textDecoration: "none",
                }}
              >
                <i
                  class="icofont-long-arrow-up icofont_hover_menu"
                  style={{
                    fontSize: "1.3rem",
                    color: "white",
                    zIndex: "10000",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "0 0",
                  }}
                ></i>
              </HoverMenuIconA>
              <div className="HoverIconTageName5">Account Stars</div>
            </div>
          </ChildMain>
          <ChildMain>
            <div
            className="IconMenu"
              style={{
                display: "block",
                margin: "0 auto",
                width: "2.5rem",
                height: "2.5rem",
                backgroundColor: "#757a95",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 0 ",
                position:'relative'
              }}
            >
              <HoverMenuIconA
                href=""
                style={{
                  display: "block",
                  margin: "0 auto",
                  textAlign: "center",
                  width: "2.2rem",
                  height: "2.2rem",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0",
                  margin: "0 0",
                  color: "#fa6342",
                  textDecoration: "none",
                }}
              >
                <i
                  class="icofont-help-robot icofont_hover_menu"
                  style={{
                    fontSize: "1.3rem",
                    color: "white",
                    zIndex: "10000",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "0 0",
                  }}
                ></i>
              </HoverMenuIconA>
              <div className="HoverIconTageName5">Helps</div>
            </div>
          </ChildMain>
        </div>
      )}
      {sideBarSub && (
        <div
          style={{
            width: "18rem",
            height: "100rem",
            backgroundColor: "white",
            paddingTop: "3rem",
          }}
        >
          <SideBarSUbChild>
            <i class="icofont-brand-nexus" onClick={() => sideBarSubOpen()}></i>
            <h6 style={{ marginLeft: "1rem", marginTop: "5px" }}>Close Menu</h6>
          </SideBarSUbChild>
          <SideBarSUbChild>
            <i class="icofont-home" onClick={() => sideBarSubOpen()}></i>
            <h6
              style={{
                marginLeft: "1rem",
                marginTop: "5px",
                marginRight: "5rem",
              }}
            >
              Home Pages
            </h6>
            <i class="icofont-caret-down"></i>
          </SideBarSUbChild>
          <SideBarSUbChild>
            <i class="icofont-recycle" onClick={() => sideBarSubOpen()}></i>
            <h6
              style={{
                marginLeft: "1rem",
                marginTop: "5px",
                marginRight: "5rem",
              }}
            >
              Pittube
            </h6>
            <i class="icofont-caret-down"></i>
          </SideBarSUbChild>
          <SideBarSUbChild>
            <i class="icofont-people" onClick={() => sideBarSubOpen()}></i>
            <h6
              style={{
                marginLeft: "1rem",
                marginTop: "5px",
                marginRight: "5rem",
              }}
            >
              Pit Point
            </h6>
            <i class="icofont-caret-down"></i>
          </SideBarSUbChild>{" "}
          <SideBarSUbChild>
            <i class="icofont-search-job" onClick={() => sideBarSubOpen()}></i>
            <h6
              style={{
                marginLeft: "1rem",
                marginTop: "5px",
                marginRight: "5rem",
              }}
            >
              Pit Job
            </h6>
            <i class="icofont-caret-down"></i>
          </SideBarSUbChild>
          <SideBarSUbChild>
            <i class="icofont-circuit" onClick={() => sideBarSubOpen()}></i>
            <h6
              style={{
                marginLeft: "1rem",
                marginTop: "5px",
                marginRight: "5rem",
              }}
            >
              Time Line
            </h6>
            <i class="icofont-caret-down"></i>
          </SideBarSUbChild>
          <SideBarSUbChild>
            <i class="icofont-heart" onClick={() => sideBarSubOpen()}></i>
            <h6
              style={{
                marginLeft: "1rem",
                marginTop: "5px",
                marginRight: "3rem",
              }}
            >
              Favorite Pages
            </h6>
            <i class="icofont-caret-down"></i>
          </SideBarSUbChild>{" "}
          <SideBarSUbChild>
            <i
              class="icofont-question-circle"
              onClick={() => sideBarSubOpen()}
            ></i>
            <h6
              style={{
                marginLeft: "1rem",
                marginTop: "5px",
                marginRight: "5rem",
              }}
            >
              Forum
            </h6>
            <i class="icofont-caret-down"></i>
          </SideBarSUbChild>{" "}
          <SideBarSUbChild>
            <i class="icofont-circuit" onClick={() => sideBarSubOpen()}></i>
            <h6
              style={{
                marginLeft: "1rem",
                marginTop: "5px",
                marginRight: "5rem",
              }}
            >
              Feature
            </h6>
            <i class="icofont-caret-down"></i>
          </SideBarSUbChild>
        </div>
      )}
    </Container>
  );
};
export default SideBarLeft;
