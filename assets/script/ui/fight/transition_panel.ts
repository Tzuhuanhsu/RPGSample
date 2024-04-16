
import { _decorator, Component, AnimationComponent, director } from 'cc';
import { PoolManager } from '../../framework/poolManager';
import { ClientEvent } from '../../framework/clientEvent';
import { Constant } from '../../framework/constant';
const { ccclass, property } = _decorator;

@ccclass('TransitionPanel')
export class TransitionPanel extends Component
{
    private static TRANSITION_IN: string = 'transitionIn';
    private static TRANSITION_OUT: string = 'transitionOut';

    @property(AnimationComponent)
    animation: AnimationComponent = null!;


    private _sceneName: string = '';

    show(sceneName: string)
    {
        this._sceneName = sceneName;
        director.addPersistRootNode(this.node);

        this.animation.play(TransitionPanel.TRANSITION_IN);

        director.preloadScene(this._sceneName, () =>
        {
            this._transitionOut();
        });
    }

    private _transitionOut()
    {
        var self = this;
        director.loadScene(this._sceneName, () =>
        {
            self.animation.play(TransitionPanel.TRANSITION_OUT);
            self.animation.once(AnimationComponent.EventType.FINISHED, () =>
            {
                director.removePersistRootNode(self.node);
                PoolManager.instance.putNode(self.node);
                ClientEvent.dispatchEvent(Constant.EVENT_NAME.ON_GAME_321);
            });
        });
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
