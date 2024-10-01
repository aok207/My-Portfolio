export const navbar = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-github"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    href: "https://github.com/aok207",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)" />
        <path
          d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_87_7208"
            x1="16"
            y1="2"
            x2="16"
            y2="29.917"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#18ACFE" />
            <stop offset="1" stopColor="#0163E0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    href: "facebook.com",
  },
];

export const dock: { text: string; href: string }[] = [
  { text: "Home", href: "/" },
  { text: "Skills", href: "/skills" },
  { text: "Projects", href: "/projects" },
  { text: "Contact", href: "/contact" },
];
