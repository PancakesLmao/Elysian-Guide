import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import elysiaLogo from "../assets/elysia.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper p-2">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex flex-col">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Built with
                </span>

                <div className="inline-flex">
                  <a
                    className="stack_icon"
                    href="https://vite.dev"
                    target="_blank"
                  >
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
                  <a
                    className="stack_icon"
                    href="https://react.dev"
                    target="_blank"
                  >
                    <img
                      src={reactLogo}
                      className="logo react"
                      alt="React logo"
                    />
                  </a>
                  <a
                    className="stack_icon"
                    href="https://elysiajs.com/"
                    target="_blank"
                  >
                    <img src={elysiaLogo} className="logo" alt="Elysia logo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      React
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">&copy; 2025 Elysia Development Team</p>
    </footer>
  );
}
