function Textarea(props) {
    const object = props;
    return (
        <div className={`form-group mb-3 position-relative`}>
            {
                object.label
                    ? (<>
                        <label htmlFor={object.name}
                               title={object.title ? object.title : ''}
                               className={`font-13 text-secondary ` + (object.labelClass ? object.labelClass : '')}>
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

            <textarea  name={object.name ? object.name : ''}
                       onChange={object.onChange ? object.onChange : null}
                       id={object.id ? object.id : (object.name ? object.name : '')}
                      dir={object.dir ? object.dir : 'auto'}
                       placeholder={object.placeholder ? object.placeholder : ''}
                       rows={object.rows ? object.rows : '3'}
                       className={`form-control font-13 text-secondary ` + (object.class ? object.class : null)}>{object.value ? object.value : ''}</textarea>
        </div>
    );
}

export default Textarea;