export default function AutomationIcon({
  width,
  height,
  className,
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "33"}
      height={height ? height : "32"}
      viewBox="0 0 33 32"
      fill="none"
      className={className}
    >
      <path
        d="M22.8045 2.66699C22.1272 2.66699 21.5577 3.17335 21.479 3.84668L21.4243 4.31543C20.7799 4.53941 20.1978 4.88059 19.6926 5.31803L19.2577 5.13053C18.6363 4.86253 17.9114 5.10116 17.5728 5.68783L17.2108 6.31283C16.8735 6.89949 17.0301 7.6458 17.5728 8.0498L17.9374 8.32064C17.8741 8.64901 17.8332 8.98685 17.8332 9.33366C17.8332 9.68047 17.8741 10.0183 17.9374 10.3467L17.5728 10.6175C17.0288 11.0215 16.8721 11.7678 17.2108 12.3545L17.5728 12.9821C17.9114 13.5688 18.6363 13.8074 19.2577 13.5394L19.6926 13.3493C20.1984 13.7873 20.7816 14.1279 21.4269 14.3519L21.4816 14.8206C21.559 15.494 22.1272 16.0003 22.8045 16.0003H23.5285C24.2058 16.0003 24.7754 15.494 24.854 14.8206L24.9087 14.3519C25.5531 14.1279 26.1353 13.7867 26.6405 13.3493L27.0754 13.5368C27.6967 13.8048 28.4216 13.5662 28.7603 12.9795L29.1223 12.3545C29.4596 11.7678 29.3029 11.0215 28.7603 10.6175L28.3957 10.3467C28.4589 10.0183 28.4999 9.68047 28.4999 9.33366C28.4999 8.98685 28.4589 8.64901 28.3957 8.32064L28.7603 8.0498C29.3043 7.6458 29.4609 6.89949 29.1223 6.31283L28.7603 5.68522C28.4216 5.09855 27.6967 4.85993 27.0754 5.12793L26.6405 5.31803C26.1347 4.88006 25.5514 4.53939 24.9061 4.31543L24.8514 3.84668C24.7741 3.17335 24.2058 2.66699 23.5285 2.66699H22.8045ZM23.1665 7.00033C24.4545 7.00033 25.4999 8.04566 25.4999 9.33366C25.4999 10.623 24.4545 11.667 23.1665 11.667C21.8785 11.667 20.8332 10.623 20.8332 9.33366C20.8332 8.04566 21.8785 7.00033 23.1665 7.00033ZM10.8045 12.0003C10.1272 12.0003 9.55769 12.5067 9.47903 13.18L9.35142 14.2816C8.27562 14.5876 7.30323 15.1348 6.5233 15.8936L5.5259 15.4639C4.90457 15.1959 4.17967 15.4345 3.84101 16.0212L3.47903 16.6462C3.14169 17.2328 3.29834 17.9791 3.84101 18.3831L4.72382 19.0394C4.59159 19.5631 4.49986 20.1023 4.49986 20.667C4.49986 21.2317 4.59159 21.7709 4.72382 22.2946L3.84101 22.9508C3.29701 23.3548 3.14036 24.1012 3.47903 24.6878L3.84101 25.3128C4.17967 25.8995 4.90457 26.1381 5.5259 25.8701L6.5233 25.4404C7.30323 26.1992 8.27562 26.7463 9.35142 27.0524L9.48163 28.154C9.55896 28.8273 10.1272 29.3337 10.8045 29.3337H11.5285C12.2058 29.3337 12.7754 28.8273 12.854 28.154L12.9816 27.0524C14.0574 26.7463 15.0298 26.1992 15.8098 25.4404L16.8072 25.8701C17.4285 26.1381 18.1534 25.8995 18.492 25.3128L18.854 24.6878C19.1914 24.1012 19.0347 23.3548 18.492 22.9508L17.6092 22.2946C17.7415 21.7709 17.8332 21.2317 17.8332 20.667C17.8332 20.1023 17.7415 19.5631 17.6092 19.0394L18.492 18.3831C19.036 17.9791 19.1927 17.2328 18.854 16.6462L18.492 16.0212C18.1534 15.4345 17.4285 15.1959 16.8072 15.4639L15.8098 15.8936C15.0298 15.1348 14.0574 14.5876 12.9816 14.2816L12.8514 13.18C12.7741 12.5067 12.2058 12.0003 11.5285 12.0003H10.8045ZM11.1665 18.0003C12.6399 18.0003 13.8332 19.1937 13.8332 20.667C13.8332 22.1403 12.6399 23.3337 11.1665 23.3337C9.69319 23.3337 8.49986 22.1403 8.49986 20.667C8.49986 19.1937 9.69319 18.0003 11.1665 18.0003Z"
        fill="white"
      />
    </svg>
  );
}