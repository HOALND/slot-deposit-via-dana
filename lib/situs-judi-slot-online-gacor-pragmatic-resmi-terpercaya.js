'use babel';

import SitusJudiSlotOnlineGacorPragmaticResmiTerpercayaView from './situs-judi-slot-online-gacor-pragmatic-resmi-terpercaya-view';
import { CompositeDisposable } from 'atom';

export default {

  situsJudiSlotOnlineGacorPragmaticResmiTerpercayaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.situsJudiSlotOnlineGacorPragmaticResmiTerpercayaView = new SitusJudiSlotOnlineGacorPragmaticResmiTerpercayaView(state.situsJudiSlotOnlineGacorPragmaticResmiTerpercayaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.situsJudiSlotOnlineGacorPragmaticResmiTerpercayaView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'situs-judi-slot-online-gacor-pragmatic-resmi-terpercaya:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.situsJudiSlotOnlineGacorPragmaticResmiTerpercayaView.destroy();
  },

  serialize() {
    return {
      situsJudiSlotOnlineGacorPragmaticResmiTerpercayaViewState: this.situsJudiSlotOnlineGacorPragmaticResmiTerpercayaView.serialize()
    };
  },

  toggle() {
    console.log('SitusJudiSlotOnlineGacorPragmaticResmiTerpercaya was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
