
import { create, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');

    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    * {
        box-sizing:border-box;
    }
    body {
        font-family: 'Baloo Tamma 2', 'Nanum Pen Script',  'Noto Sans KR', cursive;
        font-size: 12px;
        background-color:rgba(20,20,20,1);
        color: white;
        padding-top: 80px;
    }

    p, a, h1, h2, h3, h4, h5, h6 {
        transform: skew(-0.1deg);
    }
`;

export default globalStyles;