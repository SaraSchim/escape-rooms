import React from "react";
import ScrollUpButton from "react-scroll-up-button";

export default class ScrollUpBtn extends React.Component {

    render() {

        return (
            <div >
                <ScrollUpButton
                    StopPosition={0}
                    ShowAtPosition={150}
                    EasingType='easeOutCubic'
                    AnimationDuration={500}
                    ContainerClassName='ScrollUpButton__Container'
                    TransitionClassName='ScrollUpButton__Toggled'
                    style={{ width: 75, bottom: 200 }} ToggledStyle={{ right: 10 }}
                />
            </div>
        );
    }
}