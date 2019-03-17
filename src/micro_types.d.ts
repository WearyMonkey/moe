import {Subscribable} from "rxjs";
import {IValueDidChange, Lambda} from "mobx";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // HTML
            a: Micro.DetailedHTMLProps<Micro.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            address: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            area: Micro.DetailedHTMLProps<Micro.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            article: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            aside: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            audio: Micro.DetailedHTMLProps<Micro.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            b: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            base: Micro.DetailedHTMLProps<Micro.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            bdi: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            bdo: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            big: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            blockquote: Micro.DetailedHTMLProps<Micro.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
            body: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            br: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            button: Micro.DetailedHTMLProps<Micro.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            canvas: Micro.DetailedHTMLProps<Micro.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            caption: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            cite: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            code: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            col: Micro.DetailedHTMLProps<Micro.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            colgroup: Micro.DetailedHTMLProps<Micro.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            data: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            datalist: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            dd: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            del: Micro.DetailedHTMLProps<Micro.DelHTMLAttributes<HTMLElement>, HTMLElement>;
            details: Micro.DetailedHTMLProps<Micro.DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
            dfn: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            dialog: Micro.DetailedHTMLProps<Micro.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            div: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            dl: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            dt: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            em: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            embed: Micro.DetailedHTMLProps<Micro.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            fieldset: Micro.DetailedHTMLProps<Micro.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            figcaption: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            figure: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            footer: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            form: Micro.DetailedHTMLProps<Micro.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            h1: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h2: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h3: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h4: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h5: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h6: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            head: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            header: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            hgroup: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            hr: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            html: Micro.DetailedHTMLProps<Micro.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            i: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            iframe: Micro.DetailedHTMLProps<Micro.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            img: Micro.DetailedHTMLProps<Micro.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            input: Micro.DetailedHTMLProps<Micro.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            ins: Micro.DetailedHTMLProps<Micro.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            kbd: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            keygen: Micro.DetailedHTMLProps<Micro.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
            label: Micro.DetailedHTMLProps<Micro.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            legend: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            li: Micro.DetailedHTMLProps<Micro.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            link: Micro.DetailedHTMLProps<Micro.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            main: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            map: Micro.DetailedHTMLProps<Micro.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            mark: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            menu: Micro.DetailedHTMLProps<Micro.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
            menuitem: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            meta: Micro.DetailedHTMLProps<Micro.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            meter: Micro.DetailedHTMLProps<Micro.MeterHTMLAttributes<HTMLElement>, HTMLElement>;
            nav: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            noindex: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            noscript: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            object: Micro.DetailedHTMLProps<Micro.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            ol: Micro.DetailedHTMLProps<Micro.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            optgroup: Micro.DetailedHTMLProps<Micro.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            option: Micro.DetailedHTMLProps<Micro.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            output: Micro.DetailedHTMLProps<Micro.OutputHTMLAttributes<HTMLElement>, HTMLElement>;
            p: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            param: Micro.DetailedHTMLProps<Micro.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            picture: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            pre: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            progress: Micro.DetailedHTMLProps<Micro.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            q: Micro.DetailedHTMLProps<Micro.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            rp: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            rt: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            ruby: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            s: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            samp: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            script: Micro.DetailedHTMLProps<Micro.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            section: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            select: Micro.DetailedHTMLProps<Micro.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            small: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            source: Micro.DetailedHTMLProps<Micro.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            span: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            strong: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            style: Micro.DetailedHTMLProps<Micro.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            sub: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            summary: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            sup: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            table: Micro.DetailedHTMLProps<Micro.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            tbody: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            td: Micro.DetailedHTMLProps<Micro.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            textarea: Micro.DetailedHTMLProps<Micro.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            tfoot: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            th: Micro.DetailedHTMLProps<Micro.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            thead: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            time: Micro.DetailedHTMLProps<Micro.TimeHTMLAttributes<HTMLElement>, HTMLElement>;
            title: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            tr: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            track: Micro.DetailedHTMLProps<Micro.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            u: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            ul: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            "var": Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            video: Micro.DetailedHTMLProps<Micro.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            wbr: Micro.DetailedHTMLProps<Micro.HTMLAttributes<HTMLElement>, HTMLElement>;
            webview: Micro.DetailedHTMLProps<Micro.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;

            // SVG
            svg: Micro.SVGProps<SVGSVGElement>;

            animate: Micro.SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
            animateTransform: Micro.SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
            circle: Micro.SVGProps<SVGCircleElement>;
            clipPath: Micro.SVGProps<SVGClipPathElement>;
            defs: Micro.SVGProps<SVGDefsElement>;
            desc: Micro.SVGProps<SVGDescElement>;
            ellipse: Micro.SVGProps<SVGEllipseElement>;
            feBlend: Micro.SVGProps<SVGFEBlendElement>;
            feColorMatrix: Micro.SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: Micro.SVGProps<SVGFEComponentTransferElement>;
            feComposite: Micro.SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: Micro.SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: Micro.SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: Micro.SVGProps<SVGFEDisplacementMapElement>;
            feDistantLight: Micro.SVGProps<SVGFEDistantLightElement>;
            feFlood: Micro.SVGProps<SVGFEFloodElement>;
            feFuncA: Micro.SVGProps<SVGFEFuncAElement>;
            feFuncB: Micro.SVGProps<SVGFEFuncBElement>;
            feFuncG: Micro.SVGProps<SVGFEFuncGElement>;
            feFuncR: Micro.SVGProps<SVGFEFuncRElement>;
            feGaussianBlur: Micro.SVGProps<SVGFEGaussianBlurElement>;
            feImage: Micro.SVGProps<SVGFEImageElement>;
            feMerge: Micro.SVGProps<SVGFEMergeElement>;
            feMergeNode: Micro.SVGProps<SVGFEMergeNodeElement>;
            feMorphology: Micro.SVGProps<SVGFEMorphologyElement>;
            feOffset: Micro.SVGProps<SVGFEOffsetElement>;
            fePointLight: Micro.SVGProps<SVGFEPointLightElement>;
            feSpecularLighting: Micro.SVGProps<SVGFESpecularLightingElement>;
            feSpotLight: Micro.SVGProps<SVGFESpotLightElement>;
            feTile: Micro.SVGProps<SVGFETileElement>;
            feTurbulence: Micro.SVGProps<SVGFETurbulenceElement>;
            filter: Micro.SVGProps<SVGFilterElement>;
            foreignObject: Micro.SVGProps<SVGForeignObjectElement>;
            g: Micro.SVGProps<SVGGElement>;
            image: Micro.SVGProps<SVGImageElement>;
            line: Micro.SVGProps<SVGLineElement>;
            linearGradient: Micro.SVGProps<SVGLinearGradientElement>;
            marker: Micro.SVGProps<SVGMarkerElement>;
            mask: Micro.SVGProps<SVGMaskElement>;
            metadata: Micro.SVGProps<SVGMetadataElement>;
            path: Micro.SVGProps<SVGPathElement>;
            pattern: Micro.SVGProps<SVGPatternElement>;
            polygon: Micro.SVGProps<SVGPolygonElement>;
            polyline: Micro.SVGProps<SVGPolylineElement>;
            radialGradient: Micro.SVGProps<SVGRadialGradientElement>;
            rect: Micro.SVGProps<SVGRectElement>;
            stop: Micro.SVGProps<SVGStopElement>;
            switch: Micro.SVGProps<SVGSwitchElement>;
            symbol: Micro.SVGProps<SVGSymbolElement>;
            text: Micro.SVGProps<SVGTextElement>;
            textPath: Micro.SVGProps<SVGTextPathElement>;
            tspan: Micro.SVGProps<SVGTSpanElement>;
            use: Micro.SVGProps<SVGUseElement>;
            view: Micro.SVGProps<SVGViewElement>;
        }
    }
}

export = Micro;
export as namespace Micro;

declare namespace Micro {

    interface ArrayUpdate {
        index: number;
        added: ReadonlyArray<MicroNode>;
        removed: number;
    }

    type MicroNodePrimitive = Node | string | number | false | undefined;
    type MicroNode = MicroNodePrimitive | Subscribable<MicroNode | ArrayUpdate> | ReadonlyArray<MicroNode>;

    export interface Observable<T> {
        get(): T;
        observe(listener: (change: IValueDidChange<T>) => void, fireImmediately?: boolean): Lambda;
    }

    type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = {
        [key in keyof E]: E[key] | Subscribable<E[key]> | Observable<T>
    };

    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    type EventHandler<E extends Event> = { bivarianceHack(event: E): void }["bivarianceHack"];

    type MicroEventHandler<T = Element> = EventHandler;

    type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent>;
    type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent>;
    type DragEventHandler<T = Element> = EventHandler<DragEvent>;
    type FocusEventHandler<T = Element> = EventHandler<FocusEvent>;
    type FormEventHandler<T = Element> = EventHandler<FormEvent>;
    type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent>;
    type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent>;
    type MouseEventHandler<T = Element> = EventHandler<MouseEvent>;
    type TouchEventHandler<T = Element> = EventHandler<TouchEvent>;
    type PointerEventHandler<T = Element> = EventHandler<PointerEvent>;
    type UIEventHandler<T = Element> = EventHandler<UIEvent>;
    type WheelEventHandler<T = Element> = EventHandler<WheelEvent>;
    type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent>;
    type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent>;

    interface DOMAttributes<T> {
        dangerouslySetInnerHTML?: {
            __html: string;
        };

        // Clipboard Events
        onCopy?: ClipboardEventHandler<T>;
        onCopyCapture?: ClipboardEventHandler<T>;
        onCut?: ClipboardEventHandler<T>;
        onCutCapture?: ClipboardEventHandler<T>;
        onPaste?: ClipboardEventHandler<T>;
        onPasteCapture?: ClipboardEventHandler<T>;

        // Composition Events
        onCompositionEnd?: CompositionEventHandler<T>;
        onCompositionEndCapture?: CompositionEventHandler<T>;
        onCompositionStart?: CompositionEventHandler<T>;
        onCompositionStartCapture?: CompositionEventHandler<T>;
        onCompositionUpdate?: CompositionEventHandler<T>;
        onCompositionUpdateCapture?: CompositionEventHandler<T>;

        // Focus Events
        onFocus?: FocusEventHandler<T>;
        onFocusCapture?: FocusEventHandler<T>;
        onBlur?: FocusEventHandler<T>;
        onBlurCapture?: FocusEventHandler<T>;

        // Form Events
        onChange?: FormEventHandler<T>;
        onChangeCapture?: FormEventHandler<T>;
        onInput?: FormEventHandler<T>;
        onInputCapture?: FormEventHandler<T>;
        onReset?: FormEventHandler<T>;
        onResetCapture?: FormEventHandler<T>;
        onSubmit?: FormEventHandler<T>;
        onSubmitCapture?: FormEventHandler<T>;
        onInvalid?: FormEventHandler<T>;
        onInvalidCapture?: FormEventHandler<T>;

        // Image Events
        onLoad?: MicroEventHandler<T>;
        onLoadCapture?: MicroEventHandler<T>;
        onError?: MicroEventHandler<T>; // also a Media Event
        onErrorCapture?: MicroEventHandler<T>; // also a Media Event

        // Keyboard Events
        onKeyDown?: KeyboardEventHandler<T>;
        onKeyDownCapture?: KeyboardEventHandler<T>;
        onKeyPress?: KeyboardEventHandler<T>;
        onKeyPressCapture?: KeyboardEventHandler<T>;
        onKeyUp?: KeyboardEventHandler<T>;
        onKeyUpCapture?: KeyboardEventHandler<T>;

        // Media Events
        onAbort?: MicroEventHandler<T>;
        onAbortCapture?: MicroEventHandler<T>;
        onCanPlay?: MicroEventHandler<T>;
        onCanPlayCapture?: MicroEventHandler<T>;
        onCanPlayThrough?: MicroEventHandler<T>;
        onCanPlayThroughCapture?: MicroEventHandler<T>;
        onDurationChange?: MicroEventHandler<T>;
        onDurationChangeCapture?: MicroEventHandler<T>;
        onEmptied?: MicroEventHandler<T>;
        onEmptiedCapture?: MicroEventHandler<T>;
        onEncrypted?: MicroEventHandler<T>;
        onEncryptedCapture?: MicroEventHandler<T>;
        onEnded?: MicroEventHandler<T>;
        onEndedCapture?: MicroEventHandler<T>;
        onLoadedData?: MicroEventHandler<T>;
        onLoadedDataCapture?: MicroEventHandler<T>;
        onLoadedMetadata?: MicroEventHandler<T>;
        onLoadedMetadataCapture?: MicroEventHandler<T>;
        onLoadStart?: MicroEventHandler<T>;
        onLoadStartCapture?: MicroEventHandler<T>;
        onPause?: MicroEventHandler<T>;
        onPauseCapture?: MicroEventHandler<T>;
        onPlay?: MicroEventHandler<T>;
        onPlayCapture?: MicroEventHandler<T>;
        onPlaying?: MicroEventHandler<T>;
        onPlayingCapture?: MicroEventHandler<T>;
        onProgress?: MicroEventHandler<T>;
        onProgressCapture?: MicroEventHandler<T>;
        onRateChange?: MicroEventHandler<T>;
        onRateChangeCapture?: MicroEventHandler<T>;
        onSeeked?: MicroEventHandler<T>;
        onSeekedCapture?: MicroEventHandler<T>;
        onSeeking?: MicroEventHandler<T>;
        onSeekingCapture?: MicroEventHandler<T>;
        onStalled?: MicroEventHandler<T>;
        onStalledCapture?: MicroEventHandler<T>;
        onSuspend?: MicroEventHandler<T>;
        onSuspendCapture?: MicroEventHandler<T>;
        onTimeUpdate?: MicroEventHandler<T>;
        onTimeUpdateCapture?: MicroEventHandler<T>;
        onVolumeChange?: MicroEventHandler<T>;
        onVolumeChangeCapture?: MicroEventHandler<T>;
        onWaiting?: MicroEventHandler<T>;
        onWaitingCapture?: MicroEventHandler<T>;

        // MouseEvents
        onClick?: MouseEventHandler<T>;
        onClickCapture?: MouseEventHandler<T>;
        onContextMenu?: MouseEventHandler<T>;
        onContextMenuCapture?: MouseEventHandler<T>;
        onDoubleClick?: MouseEventHandler<T>;
        onDoubleClickCapture?: MouseEventHandler<T>;
        onDrag?: DragEventHandler<T>;
        onDragCapture?: DragEventHandler<T>;
        onDragEnd?: DragEventHandler<T>;
        onDragEndCapture?: DragEventHandler<T>;
        onDragEnter?: DragEventHandler<T>;
        onDragEnterCapture?: DragEventHandler<T>;
        onDragExit?: DragEventHandler<T>;
        onDragExitCapture?: DragEventHandler<T>;
        onDragLeave?: DragEventHandler<T>;
        onDragLeaveCapture?: DragEventHandler<T>;
        onDragOver?: DragEventHandler<T>;
        onDragOverCapture?: DragEventHandler<T>;
        onDragStart?: DragEventHandler<T>;
        onDragStartCapture?: DragEventHandler<T>;
        onDrop?: DragEventHandler<T>;
        onDropCapture?: DragEventHandler<T>;
        onMouseDown?: MouseEventHandler<T>;
        onMouseDownCapture?: MouseEventHandler<T>;
        onMouseEnter?: MouseEventHandler<T>;
        onMouseLeave?: MouseEventHandler<T>;
        onMouseMove?: MouseEventHandler<T>;
        onMouseMoveCapture?: MouseEventHandler<T>;
        onMouseOut?: MouseEventHandler<T>;
        onMouseOutCapture?: MouseEventHandler<T>;
        onMouseOver?: MouseEventHandler<T>;
        onMouseOverCapture?: MouseEventHandler<T>;
        onMouseUp?: MouseEventHandler<T>;
        onMouseUpCapture?: MouseEventHandler<T>;

        // Selection Events
        onSelect?: MicroEventHandler<T>;
        onSelectCapture?: MicroEventHandler<T>;

        // Touch Events
        onTouchCancel?: TouchEventHandler<T>;
        onTouchCancelCapture?: TouchEventHandler<T>;
        onTouchEnd?: TouchEventHandler<T>;
        onTouchEndCapture?: TouchEventHandler<T>;
        onTouchMove?: TouchEventHandler<T>;
        onTouchMoveCapture?: TouchEventHandler<T>;
        onTouchStart?: TouchEventHandler<T>;
        onTouchStartCapture?: TouchEventHandler<T>;

        // Pointer Events
        onPointerDown?: PointerEventHandler<T>;
        onPointerDownCapture?: PointerEventHandler<T>;
        onPointerMove?: PointerEventHandler<T>;
        onPointerMoveCapture?: PointerEventHandler<T>;
        onPointerUp?: PointerEventHandler<T>;
        onPointerUpCapture?: PointerEventHandler<T>;
        onPointerCancel?: PointerEventHandler<T>;
        onPointerCancelCapture?: PointerEventHandler<T>;
        onPointerEnter?: PointerEventHandler<T>;
        onPointerEnterCapture?: PointerEventHandler<T>;
        onPointerLeave?: PointerEventHandler<T>;
        onPointerLeaveCapture?: PointerEventHandler<T>;
        onPointerOver?: PointerEventHandler<T>;
        onPointerOverCapture?: PointerEventHandler<T>;
        onPointerOut?: PointerEventHandler<T>;
        onPointerOutCapture?: PointerEventHandler<T>;
        onGotPointerCapture?: PointerEventHandler<T>;
        onGotPointerCaptureCapture?: PointerEventHandler<T>;
        onLostPointerCapture?: PointerEventHandler<T>;
        onLostPointerCaptureCapture?: PointerEventHandler<T>;

        // UI Events
        onScroll?: UIEventHandler<T>;
        onScrollCapture?: UIEventHandler<T>;

        // Wheel Events
        onWheel?: WheelEventHandler<T>;
        onWheelCapture?: WheelEventHandler<T>;

        // Animation Events
        onAnimationStart?: AnimationEventHandler<T>;
        onAnimationStartCapture?: AnimationEventHandler<T>;
        onAnimationEnd?: AnimationEventHandler<T>;
        onAnimationEndCapture?: AnimationEventHandler<T>;
        onAnimationIteration?: AnimationEventHandler<T>;
        onAnimationIterationCapture?: AnimationEventHandler<T>;

        // Transition Events
        onTransitionEnd?: TransitionEventHandler<T>;
        onTransitionEndCapture?: TransitionEventHandler<T>;
    }

    interface HTMLAttributes<T> extends DOMAttributes<T> {
        // Standard HTML Attributes
        accessKey?: string;
        class?: string;
        contentEditable?: boolean;
        contextMenu?: string;
        dir?: string;
        draggable?: boolean;
        hidden?: boolean;
        id?: string;
        lang?: string;
        placeholder?: string;
        slot?: string;
        spellCheck?: boolean;
        tabIndex?: number;
        title?: string;

        // Unknown
        inputMode?: string;
        is?: string;
        radioGroup?: string; // <command>, <menuitem>

        // WAI-ARIA
        role?: string;

        // RDFa Attributes
        about?: string;
        datatype?: string;
        inlist?: any;
        prefix?: string;
        property?: string;
        resource?: string;
        typeof?: string;
        vocab?: string;

        // Non-standard Attributes
        autoCapitalize?: string;
        autoCorrect?: string;
        autoSave?: string;
        color?: string;
        itemProp?: string;
        itemScope?: boolean;
        itemType?: string;
        itemID?: string;
        itemRef?: string;
        results?: number;
        security?: string;
        unselectable?: 'on' | 'off';
    }

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
        'aria-activedescendant'?: string;
        /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
        'aria-atomic'?: boolean | 'false' | 'true';
        /**
         * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
         * presented if they are made.
         */
        'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
        /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
        'aria-busy'?: boolean | 'false' | 'true';
        /**
         * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
         * @see aria-pressed @see aria-selected.
         */
        'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
        /**
         * Defines the total number of columns in a table, grid, or treegrid.
         * @see aria-colindex.
         */
        'aria-colcount'?: number;
        /**
         * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
         * @see aria-colcount @see aria-colspan.
         */
        'aria-colindex'?: number;
        /**
         * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-colindex @see aria-rowspan.
         */
        'aria-colspan'?: number;
        /**
         * Identifies the element (or elements) whose contents or presence are controlled by the current element.
         * @see aria-owns.
         */
        'aria-controls'?: string;
        /** Indicates the element that represents the current item within a container or set of related elements. */
        'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
        /**
         * Identifies the element (or elements) that describes the object.
         * @see aria-labelledby
         */
        'aria-describedby'?: string;
        /**
         * Identifies the element that provides a detailed, extended description for the object.
         * @see aria-describedby.
         */
        'aria-details'?: string;
        /**
         * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
         * @see aria-hidden @see aria-readonly.
         */
        'aria-disabled'?: boolean | 'false' | 'true';
        /**
         * Indicates what functions can be performed when a dragged object is released on the drop target.
         * @deprecated in ARIA 1.1
         */
        'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
        /**
         * Identifies the element that provides an error message for the object.
         * @see aria-invalid @see aria-describedby.
         */
        'aria-errormessage'?: string;
        /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
        'aria-expanded'?: boolean | 'false' | 'true';
        /**
         * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
         * allows assistive technology to override the general default of reading in document source order.
         */
        'aria-flowto'?: string;
        /**
         * Indicates an element's "grabbed" state in a drag-and-drop operation.
         * @deprecated in ARIA 1.1
         */
        'aria-grabbed'?: boolean | 'false' | 'true';
        /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
        'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
        /**
         * Indicates whether the element is exposed to an accessibility API.
         * @see aria-disabled.
         */
        'aria-hidden'?: boolean | 'false' | 'true';
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @see aria-errormessage.
         */
        'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
        /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
        'aria-keyshortcuts'?: string;
        /**
         * Defines a string value that labels the current element.
         * @see aria-labelledby.
         */
        'aria-label'?: string;
        /**
         * Identifies the element (or elements) that labels the current element.
         * @see aria-describedby.
         */
        'aria-labelledby'?: string;
        /** Defines the hierarchical level of an element within a structure. */
        'aria-level'?: number;
        /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
        'aria-live'?: 'off' | 'assertive' | 'polite';
        /** Indicates whether an element is modal when displayed. */
        'aria-modal'?: boolean | 'false' | 'true';
        /** Indicates whether a text box accepts multiple lines of input or only a single line. */
        'aria-multiline'?: boolean | 'false' | 'true';
        /** Indicates that the user may select more than one item from the current selectable descendants. */
        'aria-multiselectable'?: boolean | 'false' | 'true';
        /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
        'aria-orientation'?: 'horizontal' | 'vertical';
        /**
         * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
         * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
         * @see aria-controls.
         */
        'aria-owns'?: string;
        /**
         * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
         * A hint could be a sample value or a brief description of the expected format.
         */
        'aria-placeholder'?: string;
        /**
         * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-setsize.
         */
        'aria-posinset'?: number;
        /**
         * Indicates the current "pressed" state of toggle buttons.
         * @see aria-checked @see aria-selected.
         */
        'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
        /**
         * Indicates that the element is not editable, but is otherwise operable.
         * @see aria-disabled.
         */
        'aria-readonly'?: boolean | 'false' | 'true';
        /**
         * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
         * @see aria-atomic.
         */
        'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text';
        /** Indicates that user input is required on the element before a form may be submitted. */
        'aria-required'?: boolean | 'false' | 'true';
        /** Defines a human-readable, author-localized description for the role of an element. */
        'aria-roledescription'?: string;
        /**
         * Defines the total number of rows in a table, grid, or treegrid.
         * @see aria-rowindex.
         */
        'aria-rowcount'?: number;
        /**
         * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
         * @see aria-rowcount @see aria-rowspan.
         */
        'aria-rowindex'?: number;
        /**
         * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-rowindex @see aria-colspan.
         */
        'aria-rowspan'?: number;
        /**
         * Indicates the current "selected" state of various widgets.
         * @see aria-checked @see aria-pressed.
         */
        'aria-selected'?: boolean | 'false' | 'true';
        /**
         * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-posinset.
         */
        'aria-setsize'?: number;
        /** Indicates if items in a table or grid are sorted in ascending or descending order. */
        'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
        /** Defines the maximum allowed value for a range widget. */
        'aria-valuemax'?: number;
        /** Defines the minimum allowed value for a range widget. */
        'aria-valuemin'?: number;
        /**
         * Defines the current value for a range widget.
         * @see aria-valuetext.
         */
        'aria-valuenow'?: number;
        /** Defines the human readable text alternative of aria-valuenow for a range widget. */
        'aria-valuetext'?: string;
    }

    interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
        // Standard HTML Attributes
        accept?: string;
        acceptCharset?: string;
        action?: string;
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        alt?: string;
        as?: string;
        async?: boolean;
        autoComplete?: string;
        autoFocus?: boolean;
        autoPlay?: boolean;
        capture?: boolean | string;
        cellPadding?: number | string;
        cellSpacing?: number | string;
        charSet?: string;
        challenge?: string;
        checked?: boolean;
        cite?: string;
        classID?: string;
        cols?: number;
        colSpan?: number;
        content?: string;
        controls?: boolean;
        coords?: string;
        crossOrigin?: string;
        data?: string;
        dateTime?: string;
        default?: boolean;
        defer?: boolean;
        disabled?: boolean;
        download?: any;
        encType?: string;
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        frameBorder?: number | string;
        headers?: string;
        height?: number | string;
        high?: number;
        href?: string;
        hrefLang?: string;
        htmlFor?: string;
        httpEquiv?: string;
        integrity?: string;
        keyParams?: string;
        keyType?: string;
        kind?: string;
        label?: string;
        list?: string;
        loop?: boolean;
        low?: number;
        manifest?: string;
        marginHeight?: number;
        marginWidth?: number;
        max?: number | string;
        maxLength?: number;
        media?: string;
        mediaGroup?: string;
        method?: string;
        min?: number | string;
        minLength?: number;
        multiple?: boolean;
        muted?: boolean;
        name?: string;
        nonce?: string;
        noValidate?: boolean;
        open?: boolean;
        optimum?: number;
        pattern?: string;
        placeholder?: string;
        playsInline?: boolean;
        poster?: string;
        preload?: string;
        readOnly?: boolean;
        rel?: string;
        required?: boolean;
        reversed?: boolean;
        rows?: number;
        rowSpan?: number;
        sandbox?: string;
        scope?: string;
        scoped?: boolean;
        scrolling?: string;
        seamless?: boolean;
        selected?: boolean;
        shape?: string;
        size?: number;
        sizes?: string;
        span?: number;
        src?: string;
        srcDoc?: string;
        srcLang?: string;
        srcSet?: string;
        start?: number;
        step?: number | string;
        summary?: string;
        target?: string;
        type?: string;
        useMap?: string;
        value?: string | string[] | number;
        width?: number | string;
        wmode?: string;
        wrap?: string;
    }

    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
        download?: any;
        href?: string;
        hrefLang?: string;
        media?: string;
        rel?: string;
        target?: string;
        type?: string;
    }

    // tslint:disable-next-line:no-empty-interface
    interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

    interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string;
        coords?: string;
        download?: any;
        href?: string;
        hrefLang?: string;
        media?: string;
        rel?: string;
        shape?: string;
        target?: string;
    }

    interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
        href?: string;
        target?: string;
    }

    interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
        autoFocus?: boolean;
        disabled?: boolean;
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        name?: string;
        type?: string;
        value?: string | string[] | number;
    }

    interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string;
        width?: number | string;
    }

    interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number;
        width?: number | string;
    }

    interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number;
    }

    interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean;
    }

    interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
        dateTime?: string;
    }

    interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean;
    }

    interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string;
        src?: string;
        type?: string;
        width?: number | string;
    }

    interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean;
        form?: string;
        name?: string;
    }

    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
        acceptCharset?: string;
        action?: string;
        autoComplete?: string;
        encType?: string;
        method?: string;
        name?: string;
        noValidate?: boolean;
        target?: string;
    }

    interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
        manifest?: string;
    }

    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
        allow?: string;
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        frameBorder?: number | string;
        height?: number | string;
        marginHeight?: number;
        marginWidth?: number;
        name?: string;
        sandbox?: string;
        scrolling?: string;
        seamless?: boolean;
        src?: string;
        srcDoc?: string;
        width?: number | string;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string;
        crossOrigin?: "anonymous" | "use-credentials" | "";
        decoding?: "async" | "auto" | "sync";
        height?: number | string;
        sizes?: string;
        src?: string;
        srcSet?: string;
        useMap?: string;
        width?: number | string;
    }

    interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
        dateTime?: string;
    }

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        accept?: string;
        alt?: string;
        autoComplete?: string;
        autoFocus?: boolean;
        capture?: boolean | string; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
        checked?: boolean;
        crossOrigin?: string;
        disabled?: boolean;
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        height?: number | string;
        list?: string;
        max?: number | string;
        maxLength?: number;
        min?: number | string;
        minLength?: number;
        multiple?: boolean;
        name?: string;
        pattern?: string;
        placeholder?: string;
        readOnly?: boolean;
        required?: boolean;
        size?: number;
        src?: string;
        step?: number | string;
        type?: string;
        value?: string | string[] | number;
        width?: number | string;

        onChange?: ChangeEventHandler<T>;
    }

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
        autoFocus?: boolean;
        challenge?: string;
        disabled?: boolean;
        form?: string;
        keyType?: string;
        keyParams?: string;
        name?: string;
    }

    interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string;
        htmlFor?: string;
    }

    interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | string[] | number;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
        as?: string;
        crossOrigin?: string;
        href?: string;
        hrefLang?: string;
        integrity?: string;
        media?: string;
        rel?: string;
        sizes?: string;
        type?: string;
    }

    interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string;
    }

    interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
        type?: string;
    }

    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoPlay?: boolean;
        controls?: boolean;
        controlsList?: string;
        crossOrigin?: string;
        loop?: boolean;
        mediaGroup?: string;
        muted?: boolean;
        playsinline?: boolean;
        preload?: string;
        src?: string;
    }

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
        charSet?: string;
        content?: string;
        httpEquiv?: string;
        name?: string;
    }

    interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string;
        high?: number;
        low?: number;
        max?: number | string;
        min?: number | string;
        optimum?: number;
        value?: string | string[] | number;
    }

    interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
    }

    interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
        classID?: string;
        data?: string;
        form?: string;
        height?: number | string;
        name?: string;
        type?: string;
        useMap?: string;
        width?: number | string;
        wmode?: string;
    }

    interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
        reversed?: boolean;
        start?: number;
        type?: '1' | 'a' | 'A' | 'i' | 'I';
    }

    interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean;
        label?: string;
    }

    interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean;
        label?: string;
        selected?: boolean;
        value?: string | string[] | number;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string;
        htmlFor?: string;
        name?: string;
    }

    interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string;
        value?: string | string[] | number;
    }

    interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
        max?: number | string;
        value?: string | string[] | number;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
        async?: boolean;
        charSet?: string;
        crossOrigin?: string;
        defer?: boolean;
        integrity?: string;
        noModule?: boolean;
        nonce?: string;
        src?: string;
        type?: string;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string;
        autoFocus?: boolean;
        disabled?: boolean;
        form?: string;
        multiple?: boolean;
        name?: string;
        required?: boolean;
        size?: number;
        value?: string | string[] | number;
        onChange?: ChangeEventHandler<T>;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string;
        sizes?: string;
        src?: string;
        srcSet?: string;
        type?: string;
    }

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string;
        nonce?: string;
        scoped?: boolean;
        type?: string;
    }

    interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
        cellPadding?: number | string;
        cellSpacing?: number | string;
        summary?: string;
    }

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string;
        autoFocus?: boolean;
        cols?: number;
        dirName?: string;
        disabled?: boolean;
        form?: string;
        maxLength?: number;
        minLength?: number;
        name?: string;
        placeholder?: string;
        readOnly?: boolean;
        required?: boolean;
        rows?: number;
        value?: string | string[] | number;
        wrap?: string;

        onChange?: ChangeEventHandler<T>;
    }

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
        colSpan?: number;
        headers?: string;
        rowSpan?: number;
        scope?: string;
    }

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
        colSpan?: number;
        headers?: string;
        rowSpan?: number;
        scope?: string;
    }

    interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
        dateTime?: string;
    }

    interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
        default?: boolean;
        kind?: string;
        label?: string;
        src?: string;
        srcLang?: string;
    }

    interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
        height?: number | string;
        playsInline?: boolean;
        poster?: string;
        width?: number | string;
    }

    // this list is "complete" in that it contains every SVG attribute
    // that React supports, but the types can be improved.
    // Full list here: https://facebook.github.io/react/docs/dom-elements.html
    //
    // The three broad type categories are (in order of restrictiveness):
    //   - "number | string"
    //   - "string"
    //   - union of string literals
    interface SVGAttributes<T> extends DOMAttributes<T> {
        // Attributes which also defined in HTMLAttributes
        // See comment in SVGDOMPropertyConfig.js
        className?: string;
        color?: string;
        height?: number | string;
        id?: string;
        lang?: string;
        max?: number | string;
        media?: string;
        method?: string;
        min?: number | string;
        name?: string;
        target?: string;
        type?: string;
        width?: number | string;

        // Other HTML properties supported by SVG elements in browsers
        role?: string;
        tabIndex?: number;

        // SVG Specific attributes
        accentHeight?: number | string;
        accumulate?: "none" | "sum";
        additive?: "replace" | "sum";
        alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" |
            "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit";
        allowReorder?: "no" | "yes";
        alphabetic?: number | string;
        amplitude?: number | string;
        arabicForm?: "initial" | "medial" | "terminal" | "isolated";
        ascent?: number | string;
        attributeName?: string;
        attributeType?: string;
        autoReverse?: number | string;
        azimuth?: number | string;
        baseFrequency?: number | string;
        baselineShift?: number | string;
        baseProfile?: number | string;
        bbox?: number | string;
        begin?: number | string;
        bias?: number | string;
        by?: number | string;
        calcMode?: number | string;
        capHeight?: number | string;
        clip?: number | string;
        clipPath?: string;
        clipPathUnits?: number | string;
        clipRule?: number | string;
        colorInterpolation?: number | string;
        colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit";
        colorProfile?: number | string;
        colorRendering?: number | string;
        contentScriptType?: number | string;
        contentStyleType?: number | string;
        cursor?: number | string;
        cx?: number | string;
        cy?: number | string;
        d?: string;
        decelerate?: number | string;
        descent?: number | string;
        diffuseConstant?: number | string;
        direction?: number | string;
        display?: number | string;
        divisor?: number | string;
        dominantBaseline?: number | string;
        dur?: number | string;
        dx?: number | string;
        dy?: number | string;
        edgeMode?: number | string;
        elevation?: number | string;
        enableBackground?: number | string;
        end?: number | string;
        exponent?: number | string;
        externalResourcesRequired?: number | string;
        fill?: string;
        fillOpacity?: number | string;
        fillRule?: "nonzero" | "evenodd" | "inherit";
        filter?: string;
        filterRes?: number | string;
        filterUnits?: number | string;
        floodColor?: number | string;
        floodOpacity?: number | string;
        focusable?: number | string;
        fontFamily?: string;
        fontSize?: number | string;
        fontSizeAdjust?: number | string;
        fontStretch?: number | string;
        fontStyle?: number | string;
        fontVariant?: number | string;
        fontWeight?: number | string;
        format?: number | string;
        from?: number | string;
        fx?: number | string;
        fy?: number | string;
        g1?: number | string;
        g2?: number | string;
        glyphName?: number | string;
        glyphOrientationHorizontal?: number | string;
        glyphOrientationVertical?: number | string;
        glyphRef?: number | string;
        gradientTransform?: string;
        gradientUnits?: string;
        hanging?: number | string;
        horizAdvX?: number | string;
        horizOriginX?: number | string;
        href?: string;
        ideographic?: number | string;
        imageRendering?: number | string;
        in2?: number | string;
        in?: string;
        intercept?: number | string;
        k1?: number | string;
        k2?: number | string;
        k3?: number | string;
        k4?: number | string;
        k?: number | string;
        kernelMatrix?: number | string;
        kernelUnitLength?: number | string;
        kerning?: number | string;
        keyPoints?: number | string;
        keySplines?: number | string;
        keyTimes?: number | string;
        lengthAdjust?: number | string;
        letterSpacing?: number | string;
        lightingColor?: number | string;
        limitingConeAngle?: number | string;
        local?: number | string;
        markerEnd?: string;
        markerHeight?: number | string;
        markerMid?: string;
        markerStart?: string;
        markerUnits?: number | string;
        markerWidth?: number | string;
        mask?: string;
        maskContentUnits?: number | string;
        maskUnits?: number | string;
        mathematical?: number | string;
        mode?: number | string;
        numOctaves?: number | string;
        offset?: number | string;
        opacity?: number | string;
        operator?: number | string;
        order?: number | string;
        orient?: number | string;
        orientation?: number | string;
        origin?: number | string;
        overflow?: number | string;
        overlinePosition?: number | string;
        overlineThickness?: number | string;
        paintOrder?: number | string;
        panose1?: number | string;
        pathLength?: number | string;
        patternContentUnits?: string;
        patternTransform?: number | string;
        patternUnits?: string;
        pointerEvents?: number | string;
        points?: string;
        pointsAtX?: number | string;
        pointsAtY?: number | string;
        pointsAtZ?: number | string;
        preserveAlpha?: number | string;
        preserveAspectRatio?: string;
        primitiveUnits?: number | string;
        r?: number | string;
        radius?: number | string;
        refX?: number | string;
        refY?: number | string;
        renderingIntent?: number | string;
        repeatCount?: number | string;
        repeatDur?: number | string;
        requiredExtensions?: number | string;
        requiredFeatures?: number | string;
        restart?: number | string;
        result?: string;
        rotate?: number | string;
        rx?: number | string;
        ry?: number | string;
        scale?: number | string;
        seed?: number | string;
        shapeRendering?: number | string;
        slope?: number | string;
        spacing?: number | string;
        specularConstant?: number | string;
        specularExponent?: number | string;
        speed?: number | string;
        spreadMethod?: string;
        startOffset?: number | string;
        stdDeviation?: number | string;
        stemh?: number | string;
        stemv?: number | string;
        stitchTiles?: number | string;
        stopColor?: string;
        stopOpacity?: number | string;
        strikethroughPosition?: number | string;
        strikethroughThickness?: number | string;
        string?: number | string;
        stroke?: string;
        strokeDasharray?: string | number;
        strokeDashoffset?: string | number;
        strokeLinecap?: "butt" | "round" | "square" | "inherit";
        strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
        strokeMiterlimit?: number | string;
        strokeOpacity?: number | string;
        strokeWidth?: number | string;
        surfaceScale?: number | string;
        systemLanguage?: number | string;
        tableValues?: number | string;
        targetX?: number | string;
        targetY?: number | string;
        textAnchor?: string;
        textDecoration?: number | string;
        textLength?: number | string;
        textRendering?: number | string;
        to?: number | string;
        transform?: string;
        u1?: number | string;
        u2?: number | string;
        underlinePosition?: number | string;
        underlineThickness?: number | string;
        unicode?: number | string;
        unicodeBidi?: number | string;
        unicodeRange?: number | string;
        unitsPerEm?: number | string;
        vAlphabetic?: number | string;
        values?: string;
        vectorEffect?: number | string;
        version?: string;
        vertAdvY?: number | string;
        vertOriginX?: number | string;
        vertOriginY?: number | string;
        vHanging?: number | string;
        vIdeographic?: number | string;
        viewBox?: string;
        viewTarget?: number | string;
        visibility?: number | string;
        vMathematical?: number | string;
        widths?: number | string;
        wordSpacing?: number | string;
        writingMode?: number | string;
        x1?: number | string;
        x2?: number | string;
        x?: number | string;
        xChannelSelector?: string;
        xHeight?: number | string;
        xlinkActuate?: string;
        xlinkArcrole?: string;
        xlinkHref?: string;
        xlinkRole?: string;
        xlinkShow?: string;
        xlinkTitle?: string;
        xlinkType?: string;
        xmlBase?: string;
        xmlLang?: string;
        xmlns?: string;
        xmlnsXlink?: string;
        xmlSpace?: string;
        y1?: number | string;
        y2?: number | string;
        y?: number | string;
        yChannelSelector?: string;
        z?: number | string;
        zoomAndPan?: string;
    }

    interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
        allowFullScreen?: boolean;
        allowpopups?: boolean;
        autoFocus?: boolean;
        autosize?: boolean;
        blinkfeatures?: string;
        disableblinkfeatures?: string;
        disableguestresize?: boolean;
        disablewebsecurity?: boolean;
        guestinstance?: string;
        httpreferrer?: string;
        nodeintegration?: boolean;
        partition?: string;
        plugins?: boolean;
        preload?: string;
        src?: string;
        useragent?: string;
        webpreferences?: string;
    }
}
