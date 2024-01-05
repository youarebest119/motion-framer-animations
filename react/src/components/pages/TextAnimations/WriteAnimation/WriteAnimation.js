import React, { useEffect, useMemo, useRef } from 'react'
import styles from "./WriteAnimation.module.scss";

const WriteAnimation = () => {
    const text = useMemo(() => ([
        [
            {
                word: "const ",
                color: "rgba(215, 58, 73, 1)",
            },
            {
                word: "provider ",
                color: "rgba(0, 92, 197, 1)",
            },
            {
                word: "= new ",
                color: "rgba(215, 58, 73, 1)",
            },
            {
                word: "AlchemyProvider",
                color: "rgba(111, 66, 193, 1)",
            },
            {
                word: "(providerConfig).",
                color: "rgba(36, 41, 46, 1)",
            },
            {
                word: "connect",
                color: "rgba(111, 66, 193, 1)",
            },
            {
                word: "(",
                color: "rgba(36, 41, 46, 1)",
            },
        ],
        [
            {
                word: "  ",
            },
            {
                word: "(",
                color: "rgba(36, 41, 46, 1)",
            },
            {
                word: "rpcClient",
                color: "rgba(227, 98, 9, 1)",
            },
            {
                word: ") ",
                color: "rgba(36, 41, 46, 1)",
            },
            {
                word: "=>",
                color: "rgba(36, 41, 46, 1)",
            },
        ],
        [
            {
                word: "    ",
            },
            {
                word: "new ",
                color: "rgba(36, 41, 46, 1)",
            },
            {
                word: "LightSmartContractAccount",
                color: "rgba(111, 66, 193, 1)",
            },
            {
                word: "({",
                color: "rgba(36, 41, 46, 1)",
            },
        ],
        [
            {
                word: "      ",
            },
            {
                word: "...",
                color: "rgba(215, 58, 73, 1) ",
            },
            {
                word: "accountConfig,",
                color: "rgba(36, 41, 46, 1)",
            },
        ],
        [
            {
                word: "      ",
            },
            {
                word: "rpcClient,",
                color: "rgba(36, 41, 46, 1)",
            },
        ],
        [
            {
                word: "    ",
            },
            {
                word: "})",
                color: "rgba(36, 41, 46, 1)",
            },
        ],
        [
            {
                word: ");",
                color: "rgba(36, 41, 46, 1)",
            },
        ],
        [
            {
                word: " ",
                color: "rgba(36, 41, 46, 1)",
            },
        ],
        [
            {
                word: "const ",
                color: "rgba(215, 58, 73, 1)",
            },
            {
                word: "{ ",
                color: "rgba(36, 41, 46, 1)",
            },
            {
                word: "hash",
                color: "rgba(0, 92, 197, 1)",
            },
            {
                word: " }",
                color: "rgba(36, 41, 46, 1)",
            },
            {
                word: " = await ",
                color: "rgba(215, 58, 73, 1) ",
            },
            {
                word: "provider.",
                color: "rgba(36, 41, 46, 1)",
            },
            {
                word: "sendUserOperation",
                color: "rgba(0, 92, 197, 1)",
            },
            {
                word: "(uo);",
                color: "rgba(36, 41, 46, 1)",
            },
        ],
    ]), [])

    // let write = word => {
    //     return word.split("").map(letter => {
    //         setTimeout(() => {
    //             return <span>{letter}</span>
    //         }, 100)
    //     })
    // }
    const ref = useRef(null);
    useEffect(() => {
    }, [text])
    return (
        <>
            <div className={styles.animation}>
                <div className={styles.tabs}>
                    <div className={styles.nav}>
                        <button>
                            getStarted.ts
                        </button>
                    </div>
                    <div className={styles.content}>
                        <h3>typescript</h3>
                        <pre ref={ref}>

                        </pre>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WriteAnimation
