import React from "react";

class Home extends React.Component {
    constructor() {
        super();
        this.hello = require("child_process").spawn("python", ["./hello.py"]);
        this.state = { fs_s5: 12 };
        this.hello.stdout.on('data', (data) => {
          this.setState({ fs_s5: data });
        });
    }
    render(){
        return(
        <div>
            <div class="home">
                <div class="template-1" id="temp1">
                <div class="panel-1">
                    <div class="panel-header">
                    <h1>Panel 1</h1>
                    <i class='bx bx-cog modal-trigger-panel'></i>
                    </div>
                    <div class="panel-body">
                    <div class="sec-5 modal-trigger-data" id="hs-sec-5">
                        <span class="h1" id="h1-fs-s5">{this.state.fs_s5}</span>
                        <h2>TWIST</h2>
                        <h3>s5</h3>
                    </div>
                    <div class="sec-4 modal-trigger-data" id="hs-sec-4">
                        <h1>--</h1>
                        <h2>TWIST</h2>
                        <h3>s4</h3>
                    </div>
                    <div class="sec-3 modal-trigger-data" id="hs-sec-3">
                        <h1>--</h1>
                        <h2>TWIST</h2>
                        <h3>s3</h3>
                    </div>
                    <div class="sec-2 modal-trigger-data" id="hs-sec-2">
                        <h1>--</h1>
                        <h2>TWIST</h2>
                        <h3>s2</h3>
                    </div>
                    <div class="sec-1 modal-trigger-data" id="hs-sec-1">
                        <h1>--</h1>
                        <h2>TWIST</h2>
                        <h3>s1</h3>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>    
        );
    }
}

export default Home;