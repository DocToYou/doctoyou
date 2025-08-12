import React from 'react'

export const Footer = () => {
  return (
    <div className="bg-[#1815a1]">
      <div className="mx-30 flex pt-15 pb-15 relative    ">
        <div>
          <h1 className="text-2xl text-white font-bold">Product</h1>
          <ul className="text-white mr-25">
            <li>Home</li>
            <li>Service</li>
            <li>Contect Us</li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl text-white font-bold">Resources</h1>
          <ul className="text-white mr-25">
            <li>Location: Chennai, Tamil Nadu, India</li>
            <li>Phone: +91 98765 43210</li>
            <li>Email: support@doc2you.in</li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl text-white font-bold">More</h1>
          <ul className="text-white">
            <li>Our Story</li>
          </ul>
        </div>

        <div className="absolute right-0">
          <h1 className="text-2xl pr-1 text-white font-bold ">Doc2you</h1>
          <ul className="text-white flex">
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-6 h-6"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.5" />
                  <path
                    d="M16.5 7.5h.01"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  version="1.1"
                  fill="currentColor"
                  class="text-white w-6 h-6 pr-1"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M23.498 6.186a2.974 2.974 0 0 0-2.094-2.107C19.5 3.75 12 3.75 12 3.75s-7.5 0-9.404.329A2.974 2.974 0 0 0 .502 6.186 31.44 31.44 0 0 0 .25 12a31.44 31.44 0 0 0 .252 5.814 2.974 2.974 0 0 0 2.094 2.107C4.5 20.25 12 20.25 12 20.25s7.5 0 9.404-.329a2.974 2.974 0 0 0 2.094-2.107A31.44 31.44 0 0 0 23.75 12a31.44 31.44 0 0 0-.252-5.814zM9.75 15.023V8.977L15.5 12l-5.75 3.023z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  className="w-6 h-6 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M12.004 2.004a9.96 9.96 0 0 0-8.576 14.961l-1.143 4.175 4.278-1.12A9.957 9.957 0 0 0 12.004 22c5.514 0 10-4.486 10-10s-4.486-10-10-10zm0 18.182a8.19 8.19 0 0 1-4.166-1.137l-.298-.176-2.54.664.68-2.48-.193-.304a8.187 8.187 0 1 1 6.517 3.433zm4.497-6.125c-.246-.123-1.45-.716-1.675-.797-.225-.082-.39-.123-.555.123-.163.245-.637.797-.78.96-.144.164-.287.184-.533.062-.246-.123-1.04-.383-1.98-1.223-.73-.65-1.223-1.453-1.367-1.699-.144-.245-.015-.377.108-.5.111-.111.246-.287.369-.43.123-.144.164-.246.246-.41.082-.163.041-.307-.02-.43-.061-.123-.555-1.34-.76-1.835-.2-.48-.403-.414-.555-.422l-.473-.008c-.163 0-.43.062-.655.307s-.86.84-.86 2.048c0 1.208.88 2.375 1.002 2.54.123.164 1.732 2.645 4.198 3.706.588.254 1.047.406 1.405.519.59.188 1.127.162 1.552.098.474-.071 1.45-.592 1.655-1.164.204-.572.204-1.06.143-1.164-.061-.102-.225-.164-.471-.287z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='pb-2'>
        <h1 className="text-center text-white">Copyright</h1>
        <h1 className="text-center text-white">
          © 2025 Doc2You. All rights reserved.
        </h1>
      </div>
    </div>
  );
}
