import { Container } from "react-bootstrap";
import Text from "./Text/Text";
import styles from "./TextAnimation.module.scss";



const TextAnimation = () => {
    const features = [
        {
            title: "Expense",
            details: "Master your spending, gain valuable insights, and take control of your financial journey effortlessly."
        },
        {
            title: "Budgeting",
            details: "Craft personlaized budgets, receive real-time alerts, and stay in command of your money like a pro.",
        },
        {
            title: "Payments",
            details: "Sasy goodbye to late fees! Get timely reminders for bill payments and manage your expenses",
        },
        {
            title: "Tracking",
            details: "Sasy goodbye to late fees! Get timely reminders for bill payments and manage your expenses",
        },
        {
            title: "Financials",
            details: "Craft personlaized budgets, receive real-time alerts, and stay in command of your money like a pro.",
        },
        {
            title: "Secure",
            details: "Master your spending, gain valuable insights, and take control of your financial journey effortlessly."
        },
    ];
    return (
        <>
            <main className={styles.main}>
                <div style={{ height: "200vh" }} />
                <section className={styles.home}>
                    <Container>
                        <div className={styles.row}>
                            <div className={styles.col_left}>
                                <h2>[Features]</h2>
                            </div>
                            <div className={styles.col_right}>
                                <ul>
                                    {
                                        features.map(item => (
                                            <Text key={item.title} item={item} />
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>
                <div style={{ height: "200vh" }} />
            </main>

        </>
    )
}

export default TextAnimation
