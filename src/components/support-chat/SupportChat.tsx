import React, { useEffect } from "react";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import Eric from "assets/support-chat/30.webp";
import Button from "components/base/Button";
import { Card, Form } from "react-bootstrap";
import Message from "components/modules/chat/message";
import { Message as MessageType, User as UserType } from "data/chat";
import ImageAttachmentPreview from "components/common/ImageAttachmentPreview";
import { useChatContext } from "providers/ChatProvider";
import axios from "axios";
import WidgetFooter from "./WidgetFooter";

const SendSvg = () => {
  return (
    <svg
      className="svg-inline--fa fa-paper-plane text-primary fs--1 ms-3"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="paper-plane"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      data-fa-i2svg=""
    >
      <path
        fill="currentColor"
        d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
      ></path>
      <path
        fill="currentColor"
        d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
      ></path>
    </svg>
  );
};

const ActiveStatus = () => {
  return (
    <svg
      className="svg-inline--fa fa-circle text-success fs--1 ms-2"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="circle"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      data-fa-i2svg=""
    >
      <path
        fill="currentColor"
        d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"
      ></path>
      <path
        fill="currentColor"
        d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"
      ></path>
    </svg>
  );
};
const Below = () => {
  return (
    <svg
      className="svg-inline--fa fa-chevron-down text-primary fs-1"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-down"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      data-fa-i2svg=""
      style={{ width: "16px" }}
    >
      <path
        fill="currentColor"
        d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
      ></path>
    </svg>
  );
};

const Erik: UserType = {
  id: 0,
  avatar: Eric,
  status: "online",
  name: "Eric",
};

export default function SupportChat() {
  const [message, setMessage] = useState<MessageType[]>([]);
  const [messageText, setMessageText] = useState("");
  const [supportVisible, setSupportVisible] = useState(false);

  const supportChatInit = () => {
    const supportChat = document.querySelector(".support-chat");
    const supportChatBtn = document.querySelectorAll(".btn-support-chat");
    const supportChatcontainer = document.querySelector(
      ".support-chat-container"
    );
    supportChatcontainer?.classList.add("show");

    if (supportChatBtn && supportChat && supportChatcontainer) {
      supportChatBtn.forEach((item) => {
        item.addEventListener("click", () => {
          supportChat.classList.toggle("show-chat");

          supportChatBtn[supportChatBtn.length - 1].classList.toggle(
            "btn-chat-close"
          );

          supportChatcontainer.classList.add("show");
        });
      });
    }
  };

  const sentMessage = async (msg: string) => {
    const sentMsg: MessageType = {
      id: 1,
      type: "sent",
      message: msg,
      time: "now",
      readAt: new Date(),
    };
    setMessage([...message, sentMsg]);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      "http://localhost:5000/api/generate",
      {
        message: msg,
      },
      config
    );
    const receiveMsg: MessageType = {
      id: 1,
      type: "received",
      message: response.data.response,
      time: "now",
      readAt: new Date(),
    };
    setMessage([...message, sentMsg, receiveMsg]);
  };

  useEffect(() => {
    supportChatInit();
  }, []);

  return (
    <div className="support-chat-container">
      <div className="container-fluid support-chat">
        <div className="card bg-white">
          <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom">
            <h5 className="mb-0 d-flex align-items-center gap-2">
              <span id="organization-name">Customer Services</span>
              <FontAwesomeIcon className="text-success" style={{marginTop: '4px'}} icon="circle" size="2xs" />
            </h5>
            <div className="btn-reveal-trigger">
              <Dropdown
                align="end"
                id="dropdown-menu-align-right"
              >
                <Dropdown.Toggle as='a' className='cursor-pointer'>
                  <FontAwesomeIcon icon="ellipsis" size="lg" className="text-black" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Request a callback</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Search in chat</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Show history</Dropdown.Item>
                  <Dropdown.Item eventKey="4">Report to Admin</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="card-body chat p-0" style={{ overflow: "auto" }}>
            {message.length === 0 && (
              <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
                <div className="text-end mt-6">
                  <a
                    className="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                    onClick={() => sentMessage("I need help with something")}
                  >
                    <p className="mb-0 fw-semi-bold fs--1">
                      I need help with something
                    </p>
                    <SendSvg />
                  </a>
                  <a
                    className="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                    onClick={() =>
                      sentMessage(
                        "I can’t reorder a product I previously ordered"
                      )
                    }
                  >
                    <p className="mb-0 fw-semi-bold fs--1">
                      I can’t reorder a product I previously ordered
                    </p>
                    <SendSvg />
                  </a>
                  <a
                    className="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                    onClick={() => sentMessage("How do I place an order?")}
                  >
                    <p className="mb-0 fw-semi-bold fs--1">
                      How do I place an order?
                    </p>
                    <SendSvg />
                  </a>
                  <a
                    className="false d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
                    href="#!"
                    onClick={() => sentMessage("My payment method not working")}
                  >
                    <p className="mb-0 fw-semi-bold fs--1">
                      My payment method not working
                    </p>
                    <SendSvg />
                  </a>
                </div>
                <div className="text-center mt-auto">
                  <div className="avatar avatar-3xl status-online">
                    <img
                      className="rounded-circle border border-3 border-white"
                      src={Eric}
                      alt=""
                    />
                  </div>
                  <h5 className="mt-2 mb-3">Eric</h5>
                  <p className="text-center text-black mb-0">
                    Ask us anything – we’ll get back to you here or by email
                    within 24 hours.
                  </p>
                </div>
              </div>
            )}
            <div className="p-1">
              {message.map((msg) =>
                msg.type === "sent" ? (
                  <Message message={msg} />
                ) : (
                  <Message message={msg} user={Erik} />
                )
              )}
            </div>
          </div>
          <WidgetFooter handleMsg={sentMessage}/>
        </div>
      </div>
      <button className="btn p-0 border border-200 btn-support-chat show">
        <span className="fs-0 btn-text text-primary text-nowrap">
          Chat demo
        </span>
        <ActiveStatus />
        <Below />
      </button>
    </div>
  );
}
