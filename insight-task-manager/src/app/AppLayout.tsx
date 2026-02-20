import styles from "./AppLayout.module.css";

// export default function AppLayout(props:any) {
//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>Insight Task Manager</header>
//       <main className={styles.main}>{props.children}</main>
//     </div>
//   )
// }

//receives a prop called children
//children is whatever you place inside applayout
//children lets you create wrapper components

//React.ReactNode -> anything react can render

export default function AppLayout({children} : {children: React.ReactNode}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Insight Task Manager</header>
      <main className={styles.main}>{children}</main>
    </div>
  )
}