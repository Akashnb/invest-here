const CommonSvgContainer = ({ children, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {children}
  </svg>
)

export const RefreshIcon = ({ className }) => (
  <CommonSvgContainer className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </CommonSvgContainer>
)

export const LibraryIcon = ({ className }) => (
  <CommonSvgContainer className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  </CommonSvgContainer>
)

export const CurrencyRupeeIcon = ({ className }) => (
  <CommonSvgContainer className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
  </CommonSvgContainer>
)

export const EmojiHappyIcon = ({ className }) => (
  <CommonSvgContainer className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </CommonSvgContainer>
)

export const UserGroupIcon = ({ className }) => (
  <CommonSvgContainer className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </CommonSvgContainer>
)

export const BriefcaseIcon = ({ className }) => (
  <CommonSvgContainer className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </CommonSvgContainer>
)

export const CheckIcon = ({ className }) => (
  <CommonSvgContainer className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </CommonSvgContainer>
)

export const FacebookIcon = ({ className }) => (
  <CommonSvgContainer className={className}>
    <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
  </CommonSvgContainer>
)

export const TwitterIcon = ({ className }) => (
  <CommonSvgContainer className={className}>
    <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
  </CommonSvgContainer>
)

export const InstagramIcon = ({ className }) => (
  <CommonSvgContainer className={className}>
    <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
  </CommonSvgContainer>
)

export const MenuIcon = ({ className }) => (
  <CommonSvgContainer className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </CommonSvgContainer>
)

export const CloseIcon = ({ className }) => (
  <CommonSvgContainer className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </CommonSvgContainer>
)

export const PinterestIcon = ({ props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 172 172"
    {...props}
  >
    <g
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    >
      <path d="M0 172V0h172v172z" />
      <path
        d="M80.625 10.75c-38.59 0-69.875 31.284-69.875 69.875 0 29.604 18.435 54.884 44.428 65.088-.63-5.543-1.176-14.026.21-20.072 1.301-5.417 8.188-34.728 8.188-34.728s-2.057-4.2-2.057-10.372c0-9.7 5.627-16.965 12.64-16.965 5.962 0 8.818 4.493 8.818 9.826 0 6.005-3.822 14.992-5.753 23.264-1.68 6.97 3.485 12.64 10.33 12.64 12.43 0 21.962-13.102 21.962-31.998 0-16.713-12.01-28.43-29.185-28.43-19.862 0-31.536 14.908-31.536 30.32 0 6.004 2.31 12.471 5.207 15.956.546.714.63 1.302.462 2.016-.504 2.184-1.722 6.97-1.932 7.936-.294 1.26-1.008 1.554-2.351.924-8.735-4.073-14.194-16.839-14.194-27.085 0-22.046 16.041-42.286 46.192-42.286 24.23 0 43.084 17.259 43.084 40.355 0 24.061-15.201 43.462-36.282 43.462-7.096 0-13.731-3.696-15.999-8.02 0 0-3.527 13.353-4.367 16.628-1.595 6.047-5.837 13.647-8.692 18.309a70.173 70.173 0 0 0 20.702 3.107c38.59 0 69.875-31.284 69.875-69.875 0-38.59-31.284-69.875-69.875-69.875z"
        fill="#57b894"
      />
    </g>
  </svg>
)

export const FacebookIcon2 = ({ props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 172 172"
    style={{
      fill: "#000",
    }}
    {...props}
  >
    <g
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    >
      <path d="M0 172V0h172v172z" />
      <path
        d="M80.625 10.75c-38.527 0-69.875 31.348-69.875 69.875S42.098 150.5 80.625 150.5 150.5 119.152 150.5 80.625 119.152 10.75 80.625 10.75zm0 10.75c32.718 0 59.125 26.407 59.125 59.125 0 29.738-21.849 54.191-50.39 58.411v-41.32h16.691l2.625-16.944H89.359v-9.28c0-7.042 2.292-13.29 8.882-13.29h10.582V43.398c-1.86-.247-5.789-.798-13.228-.798-15.523 0-24.628 8.202-24.628 26.875v11.275H55.01v16.965h15.978v41.173C42.89 134.29 21.5 110.05 21.5 80.625 21.5 47.907 47.908 21.5 80.625 21.5z"
        fill="#57b894"
      />
    </g>
  </svg>
)

export const InstagramIcon2 = ({ props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 172 172"
    style={{
      fill: "#000",
    }}
    {...props}
  >
    <g
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    >
      <path d="M0 172V0h172v172z" />
      <path
        d="M51.314 10.75c-22.34 0-40.564 18.225-40.564 40.564v58.664c0 22.297 18.225 40.522 40.564 40.522h58.664c22.297 0 40.522-18.225 40.522-40.564V51.314c0-22.34-18.225-40.564-40.564-40.564zm0 10.75h58.622a29.714 29.714 0 0 1 29.814 29.814v58.622c0 16.544-13.27 29.814-29.772 29.814H51.314c-16.544 0-29.814-13.27-29.814-29.772V51.314A29.714 29.714 0 0 1 51.314 21.5zm72.311 10.75a5.359 5.359 0 0 0-5.375 5.375A5.359 5.359 0 0 0 123.625 43 5.359 5.359 0 0 0 129 37.625a5.359 5.359 0 0 0-5.375-5.375zm-43 10.75C59.923 43 43 59.923 43 80.625s16.923 37.625 37.625 37.625 37.625-16.923 37.625-37.625S101.327 43 80.625 43zm0 10.75A26.793 26.793 0 0 1 107.5 80.625 26.793 26.793 0 0 1 80.625 107.5 26.793 26.793 0 0 1 53.75 80.625 26.793 26.793 0 0 1 80.625 53.75z"
        fill="#57b894"
      />
    </g>
  </svg>
)

export const LinkedInIcon = ({ props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 172 172"
    style={{
      fill: "#000",
    }}
    {...props}
  >
    <g
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    >
      <path d="M0 172V0h172v172z" />
      <path
        d="M29.646 10.75c-10.372 0-18.896 8.524-18.896 18.896v102c0 10.33 8.524 18.854 18.896 18.854h102c10.33 0 18.854-8.524 18.854-18.854v-102c0-10.372-8.524-18.896-18.854-18.896zm0 10.75h102c4.535 0 8.104 3.57 8.104 8.146v102c0 4.535-3.57 8.104-8.104 8.104h-102c-4.577 0-8.146-3.57-8.146-8.104v-102c0-4.577 3.57-8.146 8.146-8.146zM43 32.25c-5.92 0-10.75 4.83-10.75 10.75S37.08 53.75 43 53.75 53.75 48.92 53.75 43 48.92 32.25 43 32.25zM32.25 64.5V129h21.5V64.5zm32.25 0V129H86v-28.807c0-8.944.84-16.964 11.59-16.964 10.582 0 9.91 9.616 9.91 17.552V129H129V97.17c0-18.477-3.863-32.67-24.817-32.67-10.079 0-15.16 4.031-17.931 9.406H86V64.5z"
        fill="#57b894"
      />
    </g>
  </svg>
)

export const TwitterIcon2 = ({ props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 172 172"
    style={{
      fill: "#000",
    }}
    {...props}
  >
    <g
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    >
      <path d="M0 172V0h172v172z" />
      <path
        d="M161.25 35.441c-5.627 2.436-11.296 4.242-17.553 4.83 6.257-3.612 11.296-9.7 13.774-16.335-6.257 3.61-12.514 6.046-19.4 7.264-6.3-6.047-14.446-9.7-23.222-9.7-16.923 0-30.739 13.354-30.739 29.73 0 2.394 0 4.83.63 6.677-32.334 0-54.506-18.224-69.539-36.407-3.15 4.241-4.409 9.7-4.409 15.16 0 10.287 5.669 19.4 13.815 24.859-5.039-.588-10.036-1.806-13.815-3.612v.588c0 14.571 10.666 26.665 24.481 29.1-2.52.589-5.039 1.218-8.188 1.218-1.848 0-3.737 0-5.627-.587 3.78 12.135 21.29 26.077 35.063 26.077C45.855 122.155 35.945 129 16.125 129H10.75c13.773 8.482 30.108 10.75 47.031 10.75 57.068 0 87.806-45.478 87.806-84.908V51.23c6.257-4.283 11.296-9.7 15.663-15.789"
        fill="#57b894"
      />
    </g>
  </svg>
)

