import { DrupalParagraph } from 'next-drupal';
import { ParagraphFeatureItem } from './paragraph--feature_item';
import Image from 'next/image';

import { Fragment, useEffect, useId, useRef, useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useDebouncedCallback } from 'use-debounce';

import { AppScreen } from 'components/AppScreen';
import { Container } from 'components/Container';
import { MapFrame } from 'components/MapFrame';

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

const features = [
    {
        name: 'Locate Kyrgyzstan in the World',
        description:
            '',
        icon: DeviceWorldIcon,
        screen: WorldScreen,
    },
    {
        name: 'Locate Kyrgyzstan in Central Asia',
        description:
            '',
        icon: DeviceAsiaIcon,
        screen: CentralAsiaScreen,
    },
    {
        name: 'Locate Jeti Oguz in Kyrgyzstan',
        description:
            '',
        icon: DeviceKyrgyzstanIcon,
        screen: KyrgyzstanScreen,
    },
];

function DeviceWorldIcon(props) {
    return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
            <g fill="#A3A3A3" fill-rule="nonzero">
                <circle cx=".05" cy=".05" r="1" />
                <path d="M5 4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v13h-2V4a2 2 0 0 0-2-2h-1.382a1 1 0 0 0-.894.553l-.448.894a1 1 0 0 1-.894.553h-6.764a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 10.382 2H9a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h4v2H9a4 4 0 0 1-4-4V4Z" />
                <path d="M26.977 25.058a7.47 7.47 0 0 0-.727-3.848 9.81 9.81 0 0 1-3.337 2.082c.1 1.226.044 2.46-.165 3.67a13.202 13.202 0 0 0 4.229-1.904Zm-5.451 2.152c.246-1.175.332-2.377.255-3.575a9.825 9.825 0 0 1-2.28.267c-.786 0-1.55-.092-2.282-.267-.075 1.198.011 2.4.255 3.575 1.343.205 2.71.205 4.052 0Zm-3.74 1.206c1.139.135 2.29.135 3.428 0a13.215 13.215 0 0 1-1.714 3.542 13.214 13.214 0 0 1-1.714-3.542Zm-1.534-1.452a14.514 14.514 0 0 1-.165-3.672 9.809 9.809 0 0 1-3.338-2.083 7.47 7.47 0 0 0-.726 3.849 13.202 13.202 0 0 0 4.229 1.905Zm10.444-.368a7.51 7.51 0 0 1-5.751 5.243 14.337 14.337 0 0 0 1.529-3.629 14.327 14.327 0 0 0 4.222-1.613v-.001Zm-14.392 0a14.32 14.32 0 0 0 4.223 1.614c.34 1.275.854 2.496 1.529 3.63a7.51 7.51 0 0 1-5.752-5.243v-.001Zm8.64-9.478a7.503 7.503 0 0 1 4.705 3.066c-.821.83-1.801 1.485-2.882 1.926a14.33 14.33 0 0 0-1.822-4.992ZM19.5 17a13.192 13.192 0 0 1 2.158 5.477 8.677 8.677 0 0 1-4.315 0A13.192 13.192 0 0 1 19.5 17Zm-1.444.118a14.328 14.328 0 0 0-1.823 4.992 8.665 8.665 0 0 1-2.881-1.926 7.502 7.502 0 0 1 4.704-3.065Z" />
            </g>
        </svg>
    );
}

function DeviceAsiaIcon(props) {
    return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
            <g fill="none" fill-rule="nonzero">
                <circle cx=".05" cy=".05" r="1" fill="#A3A3A3" />
                <path
                    fill="#A3A3A3"
                    d="M23 0a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4ZM10.382 2H9a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.382a1 1 0 0 0-.894.553l-.448.894a1 1 0 0 1-.894.553h-6.764a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 10.382 2Z"
                />
                <g fill="#737373">
                    <path d="M14.557 11.61c.46-.279.943-.524 1.443-.727.903.377 1.781.855 2.506 1.52.455.426.863.984.866 1.633.002.59-.16 1.177-.456 1.687-1.932.009-3.865.001-5.797.004-.034.007-.046-.029-.06-.05a3.309 3.309 0 0 1-.428-1.727c.025-.463.263-.885.56-1.23.385-.447.866-.8 1.366-1.11ZM9.914 12.66c.039-.014.082-.045.124-.02.256.112.504.25.71.441.124.118.235.267.25.443a.968.968 0 0 1-.136.538H9.135a.992.992 0 0 1-.134-.539c.015-.174.125-.322.247-.439.193-.182.426-.313.666-.423ZM21.963 12.64c.047-.027.094.012.138.028.299.142.603.313.798.588.172.24.1.566-.034.806h-1.727a.972.972 0 0 1-.136-.538c.016-.191.145-.35.283-.473.2-.175.435-.307.678-.41ZM9.248 14.196c.038-.014.08-.013.12-.014.434.002.868 0 1.302.001.107-.007.21.084.205.194v8.296a.368.368 0 0 1-.354.358c-.35.001-.698.002-1.047 0a.368.368 0 0 1-.351-.359v-8.274a.198.198 0 0 1 .125-.202ZM21.253 14.194c.465-.026.934-.004 1.401-.011.112-.014.227.077.223.194v8.274a.37.37 0 0 1-.351.38c-.35.002-.698.001-1.047 0a.367.367 0 0 1-.355-.357v-8.277a.197.197 0 0 1 .13-.203ZM11.593 16.071a.403.403 0 0 1 .099-.012h8.616a.263.263 0 0 1 .28.258c.001.17.003.342 0 .514a.258.258 0 0 1-.259.249h-8.66a.257.257 0 0 1-.257-.25 29.564 29.564 0 0 1 0-.514.26.26 0 0 1 .181-.245ZM11.103 17.96c-.001-.311.279-.587.59-.582h8.614c.355-.007.64.342.59.688v4.352a.6.6 0 0 1-.589.576c-.882.002-1.765.002-2.647 0V20.69a.25.25 0 0 0-.213-.25c-.083-.007-.165-.001-.248-.004a.744.744 0 0 0-.21-.608c-.27-.293-.627-.488-.99-.642-.35.147-.692.335-.96.608-.167.167-.277.401-.24.642-.077.002-.154-.002-.23.002a.25.25 0 0 0-.23.251v2.306c-.89 0-1.78.003-2.67 0-.335-.007-.606-.333-.568-.663V17.96Z" />
                </g>
            </g>
        </svg>
    );
}

function DeviceKyrgyzstanIcon(props) {
    let id = useId();

    return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
            <defs>
                <linearGradient
                    id={`${id}-gradient`}
                    x1={14}
                    y1={14.5}
                    x2={7}
                    y2={17}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#737373" />
                    <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
                </linearGradient>
            </defs>
            <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
            <g fill="none" fill-rule="nonzero">
                <circle cx=".05" cy=".05" r="1" fill="#A3A3A3" />
                <path
                    fill="#A3A3A3"
                    d="M23 0a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4ZM10.382 2H9a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.382a1 1 0 0 0-.894.553l-.448.894a1 1 0 0 1-.894.553h-6.764a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 10.382 2Z"
                />
                <path
                    fill="#737373"
                    d="M9 12v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2Zm7.062-.544c.171.146.242.377.25.596.003.143.005.287-.009.429-.023.258-.058.513-.06.772.012.145.014.3.083.432l-.04.013-.388-.006-.112-.013-.022-.23c-.003-.268.072-.527.144-.782.091-.316.193-.636.183-.967l-.029-.244Zm-.872.068c.168.107.273.29.321.48.078.29.075.59.097.887.014.217.036.438.11.646l.069.166c-.345.021-.681.11-1.002.235l-.035-.031c-.13-.232-.166-.5-.178-.761l-.018-.405-.022-.352a1.618 1.618 0 0 0-.204-.665c.199.085.338.267.416.466.175.422.19.89.366 1.313l.157.265a1.489 1.489 0 0 1-.079-.655c.016-.29.074-.574.089-.864a1.743 1.743 0 0 0-.04-.56l-.047-.165Zm1.742.013.068.076.096.392c.006.257-.067.507-.13.755-.072.275-.154.554-.145.843l.021.154.114-.393c.167-.364.438-.67.629-1.019.104-.192.186-.4.201-.621.092.15.115.333.088.503a2.309 2.309 0 0 1-.19.596c-.1.23-.21.458-.282.698l-.052.413c.043-.194.15-.365.27-.521.252-.32.572-.587.794-.93.084-.128.147-.272.187-.42l.038.364c-.025.18-.104.344-.192.5-.134.236-.293.454-.426.69a1.807 1.807 0 0 0-.182.424l-.017.119.203-.308c.272-.306.632-.516.93-.798.163-.148.303-.327.394-.53a.738.738 0 0 1-.056.462c-.088.202-.231.373-.373.538-.2.229-.419.446-.573.711l-.096.246c.108-.172.265-.305.429-.417.332-.219.707-.37 1.02-.62l.317-.353c.016.211-.08.412-.214.57-.268.321-.635.536-.923.838l-.265.368c-.143-.151-.286-.305-.45-.433a3.314 3.314 0 0 0-1.836-.73c-.029-.191.017-.381.079-.56.15-.431.412-.82.502-1.27l.022-.337Zm-3.417.524.002.003c.211.047.374.214.485.391.224.374.315.81.531 1.186l.228.293-.032.008.043-.006-.055.031c-.305.13-.589.31-.842.525-.185-.156-.307-.372-.397-.593-.115-.27-.194-.558-.317-.824a1.567 1.567 0 0 0-.396-.556c.22.016.407.152.544.313.271.321.427.72.683 1.053l.297.284-.096-.136a1.68 1.68 0 0 1-.186-.49c-.071-.28-.108-.571-.184-.853a1.586 1.586 0 0 0-.306-.626l-.002-.001v-.002Zm-1.418 1.033c.214-.022.416.08.575.212.33.283.551.668.871.96l.333.23c-.267.226-.5.496-.683.796a1.157 1.157 0 0 1-.42-.29c-.25-.247-.438-.545-.673-.805-.16-.183-.348-.346-.575-.434.205-.054.42.01.599.115.399.243.69.625 1.091.867l.273.116-.16-.124a1.977 1.977 0 0 1-.34-.44c-.195-.327-.348-.683-.606-.967l-.284-.236Zm8.485.672c-.004.156-.086.3-.186.419-.165.181-.378.307-.584.43-.258.152-.525.295-.744.503l-.123.156.36-.196c.46-.167.962-.168 1.412-.364l.33-.201a.763.763 0 0 1-.273.398c-.17.134-.374.22-.574.302-.218.087-.44.165-.65.271l-.381.279c.18-.107.387-.158.596-.182.252-.025.506-.023.759-.038a2.15 2.15 0 0 0 .688-.133l.166-.085a.704.704 0 0 1-.299.333 2.016 2.016 0 0 1-.592.213c-.264.062-.534.106-.792.2l-.357.19.277-.07c.405-.046.809.053 1.21.08.211.013.426.01.628-.049l.133-.042-.34.275a1.81 1.81 0 0 1-.57.12c-.271.021-.548.021-.817.065a1.355 1.355 0 0 0-.44.142l.324-.022c.366.022.71.16 1.062.247.19.047.386.085.583.078l.268-.03a.756.756 0 0 1-.386.224c-.237.055-.482.035-.723.012-.268-.027-.536-.062-.805-.045l-.333.068.005-.344a3.33 3.33 0 0 0-.801-2.1c.138-.163.325-.277.517-.364.388-.176.817-.267 1.176-.504h.001l.275-.236Zm-4.346.304a2.786 2.786 0 0 1 1.461.525 4.73 4.73 0 0 0-1.567.337l-.07.025-.122-.044a4.615 4.615 0 0 0-.766-.224 5.253 5.253 0 0 0-.756-.096 2.805 2.805 0 0 1 1.82-.523Zm-4.94.391a.8.8 0 0 1 .234.028c.205.05.387.159.564.268.214.134.422.278.646.393.14.068.289.13.444.142l-.032.07-.2.398-.293-.11c-.197-.108-.365-.262-.53-.412-.183-.17-.362-.348-.567-.493a1.463 1.463 0 0 0-.496-.235.665.665 0 0 1 .23-.049Zm2.885.323a4.537 4.537 0 0 1 1.54.333l-.172.096-.086-.009a4.358 4.358 0 0 0-1.4-.302l.118-.118Zm3.748 0 .12.116a4.476 4.476 0 0 0-1.411.306l-.07.008-.176-.096a4.608 4.608 0 0 1 1.538-.334Zm-4.016.296c.462.034.918.138 1.343.318l-.16.11a4.111 4.111 0 0 0-1.285-.317l.08-.103.022-.008Zm4.225.002v.003h.077l.084.106a4.098 4.098 0 0 0-1.246.3H17l-.144-.097c.408-.17.842-.278 1.282-.312Zm-7.09.145.406.055c.397.121.755.349 1.16.448l.337.034c-.117.292-.2.601-.236.917-.023.18-.018.364-.015.546.017.313.075.623.178.92l.07.19a1.202 1.202 0 0 1-.444.166c-.264.046-.535.042-.802.053-.26.012-.524.035-.77.13l-.198.095a.738.738 0 0 1 .321-.346c.198-.114.424-.166.645-.218.231-.052.466-.092.692-.17l.387-.202-.309.073c-.523.05-1.039-.13-1.56-.081l-.378.087c.094-.162.269-.261.445-.315.296-.088.607-.082.91-.106.275-.019.558-.044.801-.18l-.321.023c-.284-.016-.557-.106-.83-.185-.268-.076-.544-.15-.826-.141l-.255.03a.806.806 0 0 1 .535-.248c.366-.038.732.046 1.097.058.2.006.407.009.596-.068a1.437 1.437 0 0 1-.548-.096c-.35-.123-.667-.317-1.018-.433-.19-.065-.394-.1-.592-.091a.808.808 0 0 1 .524-.162c.298.008.585.1.871.174.28.073.575.14.863.084l-.29-.065c-.28-.101-.524-.28-.768-.443-.237-.16-.482-.319-.76-.397l-.236-.045.317-.091Zm5.014.055.188.1-.19.106-.193-.106.195-.1Zm-2.367.075c.41.043.807.156 1.184.322a4.718 4.718 0 0 0-1.455 2.14 2.796 2.796 0 0 1 .271-2.46Zm4.723 0c.258.402.408.874.436 1.349 0 .156.006.31-.014.462-.022.22-.072.438-.146.646-.072-.191-.143-.382-.233-.564a4.729 4.729 0 0 0-1.227-1.571 4.013 4.013 0 0 1 1.184-.322Zm-1.89.196.157.114-.194.11-.156-.118.192-.106Zm-.946.003h.013l.186.107-.162.114-.186-.11.15-.11Zm-.38.289.18.105v.022l-.214.199a4.31 4.31 0 0 0-.792 1.067l-.135.277v-.018l-.037.1a4.597 4.597 0 0 0-.295 1.066l-.197-.263-.012-.05a4.503 4.503 0 0 1 1.286-2.313h.001l.215-.192Zm.86 0 .155.113-.158.123-.163-.123.166-.113Zm.85 0a4.51 4.51 0 0 1 1.43 2.213l.078.312-.217.294a4.365 4.365 0 0 0-1.15-2.385l-.33-.322.188-.112Zm-1.247.312.163.128a4.09 4.09 0 0 0-1.258 2.355c-.034.187-.04.378-.053.567l-.246-.182a4.204 4.204 0 0 1 1.303-2.787l.091-.081Zm.792 0 .378.391a4.182 4.182 0 0 1 1.006 2.48l-.247.173a4.102 4.102 0 0 0-1.31-2.92l.173-.124Zm-.419.357.042.006a3.956 3.956 0 0 1 1.12 2.435l.017.36-.008.105a2.82 2.82 0 0 1-2.31 0 3.925 3.925 0 0 1 .277-1.583c.152-.385.365-.747.63-1.063l.231-.259h.001Zm3.371.801c.156-.006.312.011.462.057.375.113.712.326 1.084.457.202.074.418.113.632.104a.831.831 0 0 1-.585.16c-.482-.033-.928-.256-1.411-.278l-.264.017c.04-.168.065-.345.082-.517Zm-.077.524c.178.017.352.078.51.163.398.21.739.526 1.16.693l.377.091c-.181.11-.406.114-.61.065-.311-.073-.596-.227-.892-.348-.226-.092-.468-.175-.715-.161a3.12 3.12 0 0 0 .151-.463l.019-.04Zm-6.381.504c.07.162.149.32.24.47l-.194.127c-.213.117-.454.17-.688.218-.287.057-.575.101-.847.207a1.398 1.398 0 0 0-.39.227.697.697 0 0 1 .236-.37c.147-.127.325-.21.503-.287.27-.114.554-.204.812-.345l.328-.247Zm6.208.003c.155.024.299.106.427.19.263.184.477.42.716.627.216.191.461.366.746.434l-.373.039a1.498 1.498 0 0 1-.5-.194c-.277-.157-.535-.355-.823-.498a1.298 1.298 0 0 0-.426-.13c.08-.153.17-.305.233-.468Zm-5.967.467a3.358 3.358 0 0 0 2.037 1.499l.04.017c-.012.185-.08.36-.165.521-.189.353-.454.657-.63 1.018-.078.16-.132.332-.147.512a.75.75 0 0 1-.087-.508c.039-.256.148-.497.254-.733.103-.235.211-.472.26-.724l.005-.23a1.296 1.296 0 0 1-.262.502c-.27.348-.625.631-.846 1.02l-.141.336-.044-.222c-.008-.19.06-.373.144-.539.127-.247.29-.47.433-.707.116-.197.227-.403.25-.635l-.113.197c-.139.197-.328.352-.514.5-.158.123-.317.242-.465.375-.133.121-.26.252-.354.41l-.083.158a.768.768 0 0 1 .062-.477l.253-.388c.17-.208.36-.394.526-.605.11-.147.216-.304.259-.484a1.45 1.45 0 0 1-.37.373c-.327.229-.698.376-1.016.616a1.456 1.456 0 0 0-.37.38l-.015-.024.097-.35c.096-.174.237-.315.387-.446.209-.181.436-.345.635-.542.108-.112.215-.234.276-.379-.118.125-.26.226-.413.302-.4.2-.85.289-1.237.525l-.308.26a.762.762 0 0 1 .232-.467c.164-.16.364-.28.56-.396.26-.154.531-.294.743-.514l.127-.15Zm5.732 0c.167.065.309.18.435.305.218.226.393.488.598.728.176.203.377.395.63.498a.769.769 0 0 1-.547-.09c-.234-.128-.431-.315-.63-.49a3.78 3.78 0 0 0-.444-.36l-.354-.162a4.51 4.51 0 0 0 .312-.429Zm-.32.432.271.215c.217.246.354.543.517.823.157.28.342.56.623.729a.746.746 0 0 1-.496-.154c-.205-.149-.363-.347-.522-.54-.121-.149-.242-.301-.38-.438l-.358-.254.274.363c.17.323.26.683.408 1.015.096.216.225.425.407.581-.19-.013-.358-.12-.489-.255-.201-.213-.336-.475-.487-.726-.147-.25-.303-.513-.55-.675.1.13.18.277.231.436.115.352.145.726.246 1.082.06.215.152.424.299.594a.73.73 0 0 1-.427-.302c-.147-.205-.236-.445-.327-.677-.066-.168-.13-.338-.211-.499a1.288 1.288 0 0 0-.281-.389c.167.295.189.64.197.97l.017.389c.016.291.065.592.219.846-.182-.072-.313-.235-.393-.408-.144-.312-.183-.656-.265-.982-.058-.227-.125-.459-.274-.646l.061.251c.05.34-.023.687-.058 1.027a3.221 3.221 0 0 0-.02.528c.007.15.04.298.096.438a.784.784 0 0 1-.32-.452c-.076-.252-.084-.52-.097-.78-.013-.204-.025-.41-.069-.611l-.126-.323.137-.03a3.345 3.345 0 0 0 2.147-1.146Zm-3.323 1.087.085.012c.236.05.476.074.718.07l.231-.01.034.262a2.08 2.08 0 0 1-.074.518c-.066.252-.15.5-.203.753a1.59 1.59 0 0 0-.015.719.742.742 0 0 1-.234-.427c-.046-.243-.022-.49 0-.736.023-.208.05-.417.044-.629a1.393 1.393 0 0 0-.068-.446 1.713 1.713 0 0 1-.057.432c-.117.404-.352.763-.48 1.162-.064.184-.093.379-.081.573a.744.744 0 0 1-.164-.474c-.008-.25.06-.494.121-.735.074-.276.155-.552.157-.839l-.02-.193.006-.012Z"
                />
            </g>
        </svg>
    );
}

const headerAnimation = {
    initial: { opacity: 0, transition: { duration: 0.3 } },
    animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
};

const maxZIndex = 2147483647;

const bodyVariantBackwards = {
    opacity: 0.4,
    scale: 0.8,
    zIndex: 0,
    filter: 'blur(4px)',
    transition: { duration: 0.4 },
};

const bodyVariantForwards = (custom) => ({
    y: '100%',
    zIndex: maxZIndex - custom.changeCount,
    transition: { duration: 0.4 },
});

const bodyAnimation = {
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    variants: {
        initial: (custom) =>
            custom.isForwards
                ? bodyVariantForwards(custom)
                : bodyVariantBackwards,
        animate: (custom) => ({
            y: '0%',
            opacity: 1,
            scale: 1,
            zIndex: maxZIndex / 2 - custom.changeCount,
            filter: 'blur(0px)',
            transition: { duration: 0.4 },
        }),
        exit: (custom) =>
            custom.isForwards
                ? bodyVariantBackwards
                : bodyVariantForwards(custom),
    },
};

function WorldScreen({ custom, animated = false }) {
    return (
        <AppScreen className="w-full">
            <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
                <AppScreen.Subtitle>Locate Kyrgyzstan</AppScreen.Subtitle>
                <AppScreen.Title>In the World</AppScreen.Title>
            </MotionAppScreenHeader>
            <MotionAppScreenBody
                {...(animated ? { ...bodyAnimation, custom } : {})}
            >
                <div className="-mt-4">
                    <Image
                        src="/images/MapWorld.webp"
                        alt="World Map"
                        width={640}
                        height={480} />
                </div>
            </MotionAppScreenBody>
        </AppScreen>
    );
}

function CentralAsiaScreen({ custom, animated = false }) {
    return (
        <AppScreen className="w-full">
            <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
                <AppScreen.Subtitle>Locate Kyrgyzstan</AppScreen.Subtitle>
                <AppScreen.Title>In Central Asia</AppScreen.Title>
            </MotionAppScreenHeader>
            <MotionAppScreenBody
                {...(animated ? { ...bodyAnimation, custom } : {})}
            >
                <div className="mt-4">
                    <Image
                        src="/images/MapCentralAsia.webp"
                        alt="Central Asia Map"
                        width={640}
                        height={480} />
                </div>
            </MotionAppScreenBody>
        </AppScreen>
    );
}

function KyrgyzstanScreen({ custom, animated = false }) {
    return (
        <AppScreen className="w-full">
            <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
                <AppScreen.Subtitle>Locate Jeti Oguz</AppScreen.Subtitle>
                <AppScreen.Title>In Kyrgyzstan</AppScreen.Title>
            </MotionAppScreenHeader>
            <MotionAppScreenBody
                {...(animated ? { ...bodyAnimation, custom } : {})}
            >
                <div className="-mt-4">
                    <Image
                        src="/images/MapKyrgyzstan.webp"
                        alt="Kyrgyzstan Map"
                        width={640}
                        height={480} />
                </div>
            </MotionAppScreenBody>
        </AppScreen>
    );
}

function usePrevious(value) {
    let ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

function FeaturesDesktop() {
    let [changeCount, setChangeCount] = useState(0);
    let [selectedIndex, setSelectedIndex] = useState(0);
    let prevIndex = usePrevious(selectedIndex);
    let isForwards = prevIndex === undefined ? true : selectedIndex > (prevIndex || 0);

    let onChange = useDebouncedCallback(
        (selectedIndex) => {
            setSelectedIndex(selectedIndex);
            setChangeCount((changeCount) => changeCount + 1);
        },
        100,
        { leading: true }
    );

    return (
        <Tab.Group
            as="div"
            className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
            selectedIndex={selectedIndex}
            onChange={onChange}
            vertical
        >
            <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
                {features.map((feature, featureIndex) => (
                    <div
                        key={feature.name}
                        className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
                    >
                        {featureIndex === selectedIndex && (
                            <motion.div
                                layoutId="activeBackground"
                                className="absolute inset-0 bg-gray-800"
                                initial={{ borderRadius: 16 }}
                            />
                        )}
                        <div className="relative z-10 p-8">
                            <feature.icon className="h-8 w-8" />
                            <h3 className="mt-6 text-lg font-semibold text-white">
                                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none">
                                    <span className="absolute inset-0 rounded-2xl" />
                                    {feature.name}
                                </Tab>
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </Tab.List>
            <div className="relative col-span-6">
                <MapFrame className="z-10 mx-auto w-full max-w-[480px]">
                    <Tab.Panels as={Fragment}>
                        <AnimatePresence
                            initial={false}
                            custom={{ isForwards, changeCount }}
                        >
                            {features.map((feature, featureIndex) =>
                                selectedIndex === featureIndex ? (
                                    <Tab.Panel
                                        static
                                        key={feature.name + changeCount}
                                        className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                                    >
                                        <feature.screen
                                            animated
                                            custom={{ isForwards, changeCount }}
                                        />
                                    </Tab.Panel>
                                ) : null
                            )}
                        </AnimatePresence>
                    </Tab.Panels>
                </MapFrame>
            </div>
        </Tab.Group>
    );
}

function FeaturesMobile() {
    let [activeIndex, setActiveIndex] = useState(0);
    let slideContainerRef = useRef();
    let slideRefs = useRef([]);

    useEffect(() => {
        let observer = new window.IntersectionObserver(
            (entries) => {
                for (let entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveIndex(slideRefs.current.indexOf(entry.target));
                        break;
                    }
                }
            },
            {
                root: slideContainerRef.current,
                threshold: 0.6,
            }
        );

        for (let slide of slideRefs.current) {
            if (slide) {
                observer.observe(slide);
            }
        }

        return () => {
            observer.disconnect();
        };
    }, [slideContainerRef, slideRefs]);

    return (
        <>
            <div
                ref={slideContainerRef}
                className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
            >
                {features.map((feature, featureIndex) => (
                    <div
                        key={featureIndex}
                        ref={(ref) => (slideRefs.current[featureIndex] = ref)}
                        className="w-full flex-none snap-center px-4 sm:px-6"
                    >
                        <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                            <MapFrame className="relative mx-auto w-full max-w-[240px]">
                                {/* <feature.screen /> */}
                            </MapFrame>
                            <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                                <feature.icon className="h-8 w-8" />
                                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                                    {feature.name}
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center gap-3">
                {features.map((_, featureIndex) => (
                    <button
                        type="button"
                        key={featureIndex}
                        className={clsx(
                            'relative h-0.5 w-4 rounded-full',
                            featureIndex === activeIndex
                                ? 'bg-gray-300'
                                : 'bg-gray-500'
                        )}
                        aria-label={`Go to slide ${featureIndex + 1}`}
                        onClick={() => {
                            slideRefs.current[featureIndex].scrollIntoView({
                                block: 'nearest',
                                inline: 'nearest',
                            });
                        }}
                    >
                        <span className="absolute -inset-x-1.5 -inset-y-3" />
                    </button>
                ))}
            </div>
        </>
    );
}

export interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

export function ParagraphMapFeatures({ paragraphType }: ParagraphProps) {
    return (
        <section
            id="features"
            aria-label="Map"
            className="bg-gray-900 pt-20 sm:pt-32 pb-16"
        >
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
                    <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl">
                        {paragraphType.field_headline}
                    </h2>
                    <p className="mt-2 text-lg text-gray-400">
                        {paragraphType.field_tagline}
                    </p>
                </div>
            </Container>
            <div className="mt-16 md:hidden">
                <FeaturesMobile />
            </div>
            <Container className="hidden md:mt-20 md:block">
                <FeaturesDesktop />
            </Container>
        </section>
    );
}
