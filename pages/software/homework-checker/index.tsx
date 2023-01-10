import Page from '@/components/Page';
import { css } from '@emotion/css';
import Image from 'next/image';

// note: this page is migrated from w.joelgrayson.com/homework-checker

export default function HomeworkChecker() {
    return (<Page padding>
        <style jsx>{`
            .green {
                color: #00962a;
            }

            figure#demo {
                position: relative;
            }
            figure#demo img {
                width: 100%;
            }
            figure#demo figcaption {
                position: absolute;
                font-size: 2rem;
                bottom: 1rem;
                right: 1rem;
                /* font-weight: bold; */
            }

            /* Table */
            #j_table {
                border: 1px solid black;
                border-collapse: collapse;
            }
            #j_table td, #j_table th {
                border-right: 1px solid black;
                border-left: 1px solid black;
                padding: 4px 10px;
            }
        `}</style>
        
        <style jsx>{` /* btn-icon.css and ucjg.css */
            /*
            See example at https://w.joelgrayson.com/styles/btn-icon/

            Elements: a>button.btn-icon>(svg+span{GitHub Icon})
            */

            a.btn-icon button {
                display: inline-flex;
                align-items: center;
                cursor: pointer;
                gap: 10px;
            }

            a.btn-icon button .icon {
                height: 40px;
                max-width: 100px;
            }

            a.btn-icon { /* unstyled links */
                color: inherit;
                text-decoration: inherit;
            }


            @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap');

            * {
                font-family: 'Lato';
            }
            p {
                line-height: 1.7;
            }
            .container { /* 5% Horizontal Margin */
                padding: 0 5% 0 5%;
            }

            .alert {
            padding: 0.9rem 1.3rem;
            background-color: #cce5ff;
            border-radius: 3px;
            border: 1px solid #82b9f4;
            width: fit-content;
            }

            button {
                border: 1px solid #000;
                border-radius: 3px;
                padding: 5px 10px;
            }
            button:hover {
                outline: 2px solid #111;
                outline-offset: -2px;
                filter: brightness(0.9) saturate(1.4);
            }
            button:active {
                position: relative;
                top: 1px;
            }
            button:disabled {
                outline: none;
            }
            .btn-red   { background-color: #ff8f8f; }
            .btn-yellow{ background-color: #ffd472; }
            .btn-green { background-color: #90ee90; }
            .btn-blue  { background-color: #aed8fc; }
        `}</style>
        
        <h1 className={css`
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: 3rem;
                position: relative;
                right: -15px;
            }
        `}>
            <span>Homework&nbsp;</span>
            <span className="green">Checker</span>
            <img src="/software/homework-checker/logo.png" alt="Logo" />
        </h1>
        
        {/* Buttons */}
        <div className="buttons">
            <a target="_blank" rel="noreferrer"  className="btn-icon" href="https://chrome.google.com/webstore/detail/homework-checker-schoolog/aflepcmbhmafadnddmdippaajhjnmohj/">
                <button aria-label="Chrome Web Store">
                    <svg viewBox="0 0 192 192"><defs><path id="a" d="M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path clipPath="url(#b)" fill="#eee" d="M8 20h176v152H8z" /><path fill="#fff" d="M116 36H76c-4.42 0-8 3.58-8 8s3.58 8 8 8h40c4.42 0 8-3.58 8-8s-3.58-8-8-8z" clipPath="url(#b)" /><g clipPath="url(#b)"><defs><circle id="c" cx={96} cy={160} r={76} /></defs><clipPath id="d"><use xlinkHref="#c" overflow="visible" /></clipPath><path d="M32.07 84v93.27h34.01L96 125.45h76V84zm0 0v93.27h34.01L96 125.45h76V84z" clipPath="url(#d)" fill="#DB4437" /><path d="M20 236h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24zm0 0h72.34l33.58-33.58v-25.14l-59.84-.01L20 98.24z" clipPath="url(#d)" fill="#0F9D58" /><path d="M96 125.45l29.92 51.82L92.35 236H172V125.45zm0 0l29.92 51.82L92.35 236H172V125.45z" clipPath="url(#d)" fill="#FFCD40" /><g clipPath="url(#d)"><circle fill="#F1F1F1" cx={96} cy={160} r="34.55" /><circle fill="#4285F4" cx={96} cy={160} r="27.64" /></g></g><path clipPath="url(#b)" fill="#212121" fillOpacity=".05" d="M8 20h176v76H8z" /><path fill="#212121" fillOpacity=".02" d="M8 95h176v1H8z" /><path fill="#fff" fillOpacity=".05" d="M8 96h176v1H8z" /><path fill="#212121" fillOpacity=".02" d="M116 52H76c-4.25 0-7.72-3.32-7.97-7.5-.02.17-.03.33-.03.5 0 4.42 3.58 8 8 8h40c4.42 0 8-3.58 8-8 0-.17-.01-.33-.03-.5-.25 4.18-3.72 7.5-7.97 7.5zM8 20v1h176v-1H8z" /><path fill="#231F20" fillOpacity=".1" d="M76 36h40c4.25 0 7.72 3.32 7.97 7.5.01-.17.03-.33.03-.5 0-4.42-3.58-8-8-8H76c-4.42 0-8 3.58-8 8 0 .17.01.33.03.5.25-4.18 3.72-7.5 7.97-7.5zm96 135H20c-6.6 0-12-5.4-12-12v1c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12v-1c0 6.6-5.4 12-12 12z" /><radialGradient id="e" cx="7.502" cy="19.344" r="227.596" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#fff" stopOpacity=".1" /><stop offset={1} stopColor="#fff" stopOpacity={0} /></radialGradient><path fill="url(#e)" d="M8 20v140c0 6.6 5.4 12 12 12h152c6.6 0 12-5.4 12-12V20H8zm108 32H76c-4.42 0-8-3.58-8-8s3.58-8 8-8h40c4.42 0 8 3.58 8 8s-3.58 8-8 8z" /><path fill="none" d="M0 0h192v192H0z" /></svg>
                    <span style={{width: 82}}>Add to Chrome</span>
                </button>
            </a>
            <a target="_blank" rel="noreferrer"  className="btn-icon" href="https://github.com/JoelGrayson/Homework-Checker">
                <button aria-label="GitHub source code">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                    <span>Source Code</span>
                </button>
            </a>
        </div>                
        <p>Organize your school life and motivate yourself with Homework Checker. Keep track of your complete/incomplete Schoology assignments by checking them off.</p>
        <figure id="demo">
            <img src="/software/homework-checker/demo.gif" alt="Demo" />
            <figcaption>Demo</figcaption>
        </figure>
        <br /><br />
        {/* Table */}
        <table id="j_table">
            <tbody>
                <tr> {/* titles */}
                    <th>Default</th>
                    <th>With Homework Checker</th>
                </tr>
                <tr> {/* images */}
                    <td>
                        <Image width="200px" alt="default" src="/software/homework-checker/regular.jpg" />
                    </td>
                    <td>
                        <Image width="200px" alt="demo" src="/software/homework-checker/with-homework-checker.jpg" />
                    </td>
                </tr>
                <tr> {/* explanation */}
                    <td>
                        <div>- Overwhelming</div>
                        <div>- Might overlook an assignment</div>
                    </td>
                    <td>
                        <div>- Easier to tackle one assignment at a time</div>
                        <div>- Visual sense of progress</div>
                        <div>- Motivating</div>
                    </td>
                </tr>
            </tbody>
        </table>
        
    </Page>);
}
