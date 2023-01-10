// 型定義できる
type ContainerProps = {
    title: string
    children: React.ReactNode
}

// 引数の型指定
const Container = (props: ContainerProps) => {
    // childrenはContainerコンポーネントの子要素のことを指している。
    const {title, children} = props

    return (
        <div style={{background: 'red'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

// 戻り値の型指定
const Parent = (): JSX.Element => {
     return (
        // 今までは<Hello />こんな感じで閉じタグがなかったけど、children要素を使用するために閉じタグを使っている。
        <Container title="Hello">
            <p>ここの部分が背景色で囲まれるゾ</p>
            <p>↑え！なんか急にしんちゃんがいる！</p>
        </Container>
     )
}

export default Parent