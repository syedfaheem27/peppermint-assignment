import React from 'react'
import { useParams } from 'react-router-dom'
import styles from "./UserDashboard.module.css"

const UserDashboard = () => {
    const { userId } = useParams()
    return (
        <>
            <header>
                <h1>
                    Welcome %%Username%%
                </h1>
                <h2>
                    Current Balance: %%CurrentBalance%%
                </h2>
            </header>
            <main className={styles.main}>
                <form className={styles.form}>
                    <div className={styles.comp}>
                        <label htmlFor="expenseName">Expense Name</label>
                        <input
                            required type="text" id="expenseName" name="expenseName" placeholder='Expense Name' />
                    </div>
                    <div className={styles.comp}>
                        <label htmlFor="descripton">Description</label>
                        <input
                            required type="text" id="description" name="description" placeholder='Expense Description' />
                    </div>
                    <div className={styles.comp}>
                        <label htmlFor="amount">Amount</label>
                        <input
                            required type="number" id="amount" name="amount" placeholder='Expense Amount' />
                    </div>
                    <button className={styles.submit}>Add Expense</button>
                </form>
            </main>
        </>

    )
}

export default UserDashboard
