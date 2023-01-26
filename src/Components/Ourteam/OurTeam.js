import React from 'react';
import './OurTeam.css'
import arrow from '../../Assets/54531.png'
import nayeemvai from "../../Assets/Naeem.8b219602dd0039e0bdf8.jpg";
import jubairvai from '../../Assets/Jubaer vai3.76dd7c79bd6fe23a16fd.jpg'
import sohagvai from '../../Assets/Sohag vai5.baed3fcb95f590704297.png'
import saifulvai from '../../Assets/Hridoy vai2.fd4c865e5b168ce7edca.png'

const OurTeam = () => {
    return (
      <div>
        <div>
          <h1 className="text-5xl font-bold flex justify-center items-center mt-10">
            Meet Our Team
          </h1>
          <p className="text-xl flex justify-center items-center mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
            nemo! Eos incidunt rem quam dicta?
          </p>
        </div>
        <section class="our-team-section mt-6">
          <div class=" max-w-7xl lg:mx-auto md:mx-auto mx-5">
            <div class="grid grid-cols-4 gap-20 ">
              <div>
                <div class="our-team">
                  <div class="pic">
                    <img src={jubairvai} alt="..." />
                    <h2 className="text-2xl font-bold whitespace-nowrap">
                      Team Leader
                    </h2>
                  </div>
                  <div class="team-content">
                    <h3 class="title">Jubair bhai</h3>

                    <span class="post">
                      <p>Jubairbhai@gmail.com</p>
                    </span>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="28"
                          height="28"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#fff"
                            d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                          ></path>
                          <path
                            fill="#cfd8dc"
                            d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                          ></path>
                          <path
                            fill="#40c351"
                            d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                          ></path>
                          <path
                            fill="#fff"
                            fill-rule="evenodd"
                            d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="28"
                          height="28"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#1e88e5"
                            d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20 C42,38.411,38.411,42,34,42z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M35.926,17.488L29.414,24l6.511,6.511C35.969,30.347,36,30.178,36,30V18 C36,17.822,35.969,17.653,35.926,17.488z M26.688,23.899l7.824-7.825C34.347,16.031,34.178,16,34,16H14 c-0.178,0-0.347,0.031-0.512,0.074l7.824,7.825C22.795,25.38,25.205,25.38,26.688,23.899z M24,27.009 c-1.44,0-2.873-0.542-3.99-1.605l-6.522,6.522C13.653,31.969,13.822,32,14,32h20c0.178,0,0.347-0.031,0.512-0.074l-6.522-6.522 C26.873,26.467,25.44,27.009,24,27.009z M12.074,17.488C12.031,17.653,12,17.822,12,18v12c0,0.178,0.031,0.347,0.074,0.512 L18.586,24L12.074,17.488z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="28"
                          height="28"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#fff"
                            d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"
                          ></path>
                          <path
                            fill="#455a64"
                            d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"
                          ></path>
                          <path
                            fill="#455a64"
                            d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"
                          ></path>
                          <path
                            fill="#455a64"
                            d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"
                          ></path>
                          <path
                            fill="#00bcd4"
                            d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          alt="svgImg"
                          className="w-6 h-6"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMjg4RDEiIGQ9Ik00MiwzN2MwLDIuNzYyLTIuMjM4LDUtNSw1SDExYy0yLjc2MSwwLTUtMi4yMzgtNS01VjExYzAtMi43NjIsMi4yMzktNSw1LTVoMjZjMi43NjIsMCw1LDIuMjM4LDUsNVYzN3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTIgMTlIMTdWMzZIMTJ6TTE0LjQ4NSAxN2gtLjAyOEMxMi45NjUgMTcgMTIgMTUuODg4IDEyIDE0LjQ5OSAxMiAxMy4wOCAxMi45OTUgMTIgMTQuNTE0IDEyYzEuNTIxIDAgMi40NTggMS4wOCAyLjQ4NiAyLjQ5OUMxNyAxNS44ODcgMTYuMDM1IDE3IDE0LjQ4NSAxN3pNMzYgMzZoLTV2LTkuMDk5YzAtMi4xOTgtMS4yMjUtMy42OTgtMy4xOTItMy42OTgtMS41MDEgMC0yLjMxMyAxLjAxMi0yLjcwNyAxLjk5QzI0Ljk1NyAyNS41NDMgMjUgMjYuNTExIDI1IDI3djloLTVWMTloNXYyLjYxNkMyNS43MjEgMjAuNSAyNi44NSAxOSAyOS43MzggMTljMy41NzggMCA2LjI2MSAyLjI1IDYuMjYxIDcuMjc0TDM2IDM2IDM2IDM2eiI+PC9wYXRoPgo8L3N2Zz4="
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div class="our-team">
                  <div class="pic">
                    <img src={nayeemvai} alt="..." />
                    <h2 className="text-2xl font-bold whitespace-nowrap">
                      Web Developer
                    </h2>
                  </div>
                  <div class="team-content">
                    <h3 class="title">Nyeem Bhai</h3>

                    <span class="post">
                      <p>Jubairbhai@gmail.com</p>
                    </span>
                  </div>
                  <ul class="social">
                    <li>
                      <a href="#" class="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-google-plus"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-linkedin"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="our-team">
                  <div class="pic">
                    <img src={sohagvai} alt="..." />
                    <h2 className="text-2xl font-bold whitespace-nowrap">
                      Web Developer
                    </h2>
                  </div>
                  <div class="team-content">
                    <h3 class="title">Sohag bhai</h3>

                    <span class="post">
                      <p>Jubairbhai@gmail.com</p>
                    </span>
                  </div>
                  <ul class="social">
                    <li>
                      <a href="#" class="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-google-plus"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-linkedin"></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div class="our-team">
                  <div class="pic">
                    <img src={saifulvai} alt="..." />
                    <h2 className="text-2xl font-bold whitespace-nowrap">
                      Web Developer
                    </h2>
                  </div>
                  <div class="team-content">
                    <h3 class="title">Saifull Bhai</h3>

                    <span class="post">
                      <p>Jubairbhai@gmail.com</p>
                    </span>
                  </div>
                  <ul class="social">
                    <li>
                      <a href="#" class="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-google-plus"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-linkedin"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default OurTeam;