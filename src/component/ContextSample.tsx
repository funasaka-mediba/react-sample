import React from "react";

// Titleを渡すためにContextを作成
// 第一引数はデフォルト値
const TitleContext = React.createContext('')

const Title = () => {
    return (
        <TitleContext.Consumer>
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            <Title />
        </div>
    )
}

// 親子関係じゃなくても値を渡せるのがContext（Consumer・Provider）
const Page = () => {
    const title = 'React Book'

    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}

export default Page