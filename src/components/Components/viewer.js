import ContextMenuPlugin from 'rete-context-menu-plugin';
import ConnectionReroutePlugin from 'rete-connection-reroute-plugin';
import Components from '@/rete/components/ecosystem';
import { initialize as init } from '@/rete'
import data from '@/rete/data/ecosystem.json';

export default async function(container) {
    const { editor, engine, resize, process } = await init(container);
    
    editor.use(ContextMenuPlugin);
    editor.use(ConnectionReroutePlugin);

    [
        new Components.PackageComponent()
    ].map(c => {
        editor.register(c);
        engine.register(c);
    });
    
    await editor.fromJSON(data);

    window.editor = editor;
    
    resize();
    process();
}