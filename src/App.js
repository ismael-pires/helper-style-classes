import React from 'react'
import Card from "./components/Card"

const App = () => {

    const getCards = (number, className) => {

        const setFill = value => {
            let result = '';
            if (value > 9) {
                result += '0'
            } else {
                for (let i = 0; i < 2; i++) {
                    result += '0'
                }
            }
            return result + value;
        };

        let result = [];
        for (let i = 0; i < number; i++) {
            result.push({id: i, title: 'Card ' + setFill(i + 1), className})
        }
        return result
    }

    return (
        <section id="main">
            <h1>Flex Examples</h1>
            <div className="container">
                <div className="title">
                    <h3>flex-01-10</h3>
                </div>
                <div className="content">
                    {getCards(1, 'flex-01-10').map(item => (
                        <Card key={item.id} title={item.title} className={item.className}/>
                    ))}
                </div>
            </div>
            <div className="container">
                <div className="title">
                    <h3>flex-02-10</h3>
                </div>
                <div className="content">
                    {getCards(2, 'flex-02-10').map(item => (
                        <Card key={item.id} title={item.title} className={item.className}/>
                    ))}
                </div>
            </div>
            <div className="container">
                <div className="title">
                    <h3>flex-03-10</h3>
                </div>
                <div className="content">
                    {getCards(3, 'flex-03-10').map(item => (
                        <Card key={item.id} title={item.title} className={item.className}/>
                    ))}
                </div>
            </div>
            <div className="container">
                <div className="title">
                    <h3>flex-04-10</h3>
                </div>
                <div className="content">
                    {getCards(4, 'flex-04-10').map(item => (
                        <Card key={item.id} title={item.title} className={item.className}/>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="title">
                    <h3>flex-05-10</h3>
                </div>
                <div className="content">
                    {getCards(5, 'flex-05-10').map(item => (
                        <Card key={item.id} title={item.title} className={item.className}/>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="title">
                    <h3>flex-06-10</h3>
                </div>
                <div className="content">
                    {getCards(6, 'flex-06-10').map(item => (
                        <Card key={item.id} title={item.title} className={item.className}/>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="title">
                    <h3>flex-07-10</h3>
                </div>
                <div className="content">
                    {getCards(7, 'flex-07-10').map(item => (
                        <Card key={item.id} title={item.title} className={item.className}/>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="title">
                    <h3>flex-08-10</h3>
                </div>
                <div className="content">
                    {getCards(8, 'flex-08-10').map(item => (
                        <Card key={item.id} title={item.title} className={item.className}/>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="title">
                    <h3>flex-09-10</h3>
                </div>
                <div className="content">
                    {getCards(9, 'flex-09-10').map(item => (
                        <Card key={item.id} title={item.title} className={item.className}/>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="title">
                    <h3>flex-10-10</h3>
                </div>
                <div className="content">
                    {getCards(10, 'flex-10-10').map(item => (
                        <Card key={item.id} title={item.title} className={item.className}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default App