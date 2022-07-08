function ListIsEmpty(){
    return (
        <div className="row">
            <div className="col-12">
                <div className="card border-radius-theme-2 ">
                    <div className="card-body ">
                        <img src="/images/listisempty.svg"
                             className="d-block m-auto w-50 mb-4"
                             alt="محتوایی یافت نشد | بانی ارز دیجیتال"/>
                        <p className="d-block text-center font-30">
                            محتوایی یافت نشد
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListIsEmpty;