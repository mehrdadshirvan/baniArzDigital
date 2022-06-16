function Input(props) {
    const object = props;
    return (
        <div className={`form-group mb-3 position-relative`}>
            {
                object.label
                    ? (<>
                        <label htmlFor={object.name}
                               title={object.title ? object.title : ''}
                               className={`font-12 text-secondary ` + (object.labelClass ? object.labelClass : '')}>
                            {
                                object.name
                                    ? <i className={`` + (object.icon) ? object.icon : ''}></i>
                                    : null
                            }
                            {object.label ? object.label : ''}
                            <i className="text-danger font-12">
                                {object.required ? '*' : ''}
                            </i>
                            <span className="text-danger font-10">
                              {(object.alertTextLabel) ? "(" + object.alertTextLabel + ")" : ""}
                          </span>
                        </label>
                    </>)
                    : null
            }

            <div className={object.inputGroup ? 'input-group' : ''}>
                {
                    object.inputPrepend
                        ? (
                            <>
                                <div className={`input-group-text ` + object.inputPrependClass ? object.inputPrependClass : ''}
                                     id={object.inputPrependId ? object.inputPrependId : ''}>
                                    {
                                        object.inputPrependIcon
                                            ? (
                                                <>
                                                    <i className={`icon ` + (object.inputPrependIcon ? object.inputPrependIcon : '')}
                                                       style="margin: -8px 0 0"></i>
                                                </>
                                            )
                                            : null
                                    }
                                    {object.inputPrependText ? object.inputPrependText : ''}
                                </div>
                            </>
                        )
                        : null

                }


                <input type={object.type ? object.type : 'text'}
                       name={object.name ? object.name : ''}
                       onChange={object.onChange ? object.onChange : null}
                       autoComplete={object.autocomplete ? object.autocomplete : 'on'}
                       id={object.id ? object.id : (object.name ? object.name : '')}
                       className={`form-control font-13 text-secondary ` + (object.class ? object.class : null)}
                       value={object.value ? object.value : ''}
                       placeholder={object.placeholder ? object.placeholder : ''}
                />

                {
                    object.inputAppend
                        ? (
                            <>
                                <div className={`input-group-text ` + (object.inputAppendClass) ? object.inputAppendClass : ''}
                                     id={object.inputAppendId ? object.inputAppendId : ''}>

                                    {
                                        object.inputAppendIcon
                                            ? (
                                                <i className={`icon ` + object.inputAppendIcon ? object.inputAppendIcon : ''}
                                                   style="margin: -8px 0 0"></i>
                                            )
                                            : null
                                    }
                                    {
                                        object.inputAppendText
                                            ? object.inputAppendText
                                            : null
                                    }
                                </div>
                            </>
                        )
                        : null
                }

            </div>
        </div>
    );
}

export default Input;