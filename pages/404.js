import { Component } from "react";
import CustomFooter from "./components/custom-footer";
import CustomHead from "./components/custom-head";
import CustomMenu from "./components/custom-menu";

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <style jsx>{
                    `
                    .verticalAlign{
                        right: 50%;
                        bottom: 50%;
                        transform: translate(50%,50%);
                        position: absolute;
                    }
                    `
                }</style>
                <CustomHead />
                <CustomMenu />
                <div className="verticalAlign">
                    <h1 className="text-light">Conteúdo não encontrado.</h1>
                </div>
                <CustomFooter fixed/>
            </div>
        )
    }
}