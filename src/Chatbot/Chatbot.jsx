import React from "react";
import "./Chatbot.css";

function Chatbot() {
  return (
    <div>
      <div className="chatbot-container">
        <div id="header">
          <h1>MindHarbour</h1>
        </div>
        <div id="chatbot">
          {/* message section */}
          <div id="conversation">
            <div className="chatbot-message">
              <p className="chatbot-text">
                Hi! I,m Lauren👋 it's great to see you!
              </p>
              <p className="chatbot-text">What would You like to access</p>
              <ul>
                <li>
                  <button>
                    <a href="https://todo-list-gray-ten.vercel.app/">
                      To do list
                    </a>
                  </button>
                </li>
                <li>
                  <button>
                    <a href="https://reminder-app-eight.vercel.app/">
                      Medicine Reminder
                    </a>
                  </button>
                </li>
                <li>
                  <button><a href="">Location Tracking</a>
                   </button>
                </li>
              </ul>
            </div>
          </div>
          {/* input section */}
          <form id="input-form">
            <message-container>
              <input
                id="input-field"
                type="text"
                placeholder="Type your message here"
              />
              <button id="submit-button" type="submit">
                {/* <img className="send-icon" src="send-message.png" alt="" /> */}
                <span>➡️</span>
              </button>
            </message-container>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
