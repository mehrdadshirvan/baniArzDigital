import Link from 'next/link';

function PaginationList({list, url = ''}) {
    console.log(list)
    return (
        <>
            {
                list.links.length > 0
                    ? (
                        <nav className="d-flex justify-items-center justify-content-between">
                            <div className="d-none flex-sm-fill d-sm-flex align-items-sm-center justify-content-sm-between">
                                <div>
                                    <p className="small text-muted">
                                        نمایش
                                        <span className="font-medium">{list.current_page}</span>
                                        از
                                        <span className="font-medium">{list.total}</span>
                                        صفحه
                                    </p>
                                </div>

                                <div>
                                    <ul className="pagination">
                                        {/*@if ($paginator->onFirstPage())*/}
                                        {/*<li className="page-item disabled"*/}
                                        {/*    aria-disabled="true"*/}
                                        {/*    aria-label="@lang('pagination.previous')">*/}
                                        {/*    <span className="page-link"*/}
                                        {/*          aria-hidden="true">&lsaquo;</span>*/}
                                        {/*</li>*/}
                                        {/*@else*/}
                                        {/*<li className="page-item">*/}
                                        {/*    <a className="page-link"*/}
                                        {/*       href="{{ $paginator->previousPageUrl() }}"*/}
                                        {/*       rel="prev"*/}
                                        {/*       aria-label="@lang('pagination.previous')">&lsaquo;</a>*/}
                                        {/*</li>*/}
                                        {/*@endif*/}

                                        {
                                            list.links.map((link) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <li className={`page-item ${link.active ? 'active' : ''}`} key={link.label}>
                                                    <Link href={url + '?page=' +link.label}>
                                                        <a className="page-link">
                                                            {link.label}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))
                                        }

                                        {/*@foreach ($elements as $element)*/}
                                        {/*{{-- "Three Dots" Separator --}}*/}
                                        {/*@if (is_string($element))*/}
                                        {/*<li className="page-item disabled"*/}
                                        {/*    aria-disabled="true"><span className="page-link">{{$element}}</span></li>*/}
                                        {/*@endif*/}

                                        {/*{{-- Array Of Links --}}*/}
                                        {/*@if (is_array($element))*/}
                                        {/*@foreach ($element as $page => $url)*/}
                                        {/*@if ($page == $paginator->currentPage())*/}
                                        {/*<li className="page-item active"*/}
                                        {/*    aria-current="page"><span className="page-link">{{$page}}</span></li>*/}
                                        {/*@else*/}
                                        {/*<li className="page-item">*/}
                                        {/*    <a className="page-link"*/}
                                        {/*       href="{{ $url }}">{{$page}}</a>*/}
                                        {/*</li>*/}
                                        {/*@endif*/}
                                        {/*@endforeach*/}
                                        {/*@endif*/}
                                        {/*@endforeach*/}

                                        {/*{{-- Next Page Link --}}*/}
                                        {/*@if ($paginator->hasMorePages())*/}
                                        {/*<li className="page-item">*/}
                                        {/*    <a className="page-link"*/}
                                        {/*       href="{{ $paginator->nextPageUrl() }}"*/}
                                        {/*       rel="next"*/}
                                        {/*       aria-label="@lang('pagination.next')">&rsaquo;</a>*/}
                                        {/*</li>*/}
                                        {/*@else*/}
                                        {/*<li className="page-item disabled"*/}
                                        {/*    aria-disabled="true"*/}
                                        {/*    aria-label="@lang('pagination.next')">*/}
                                        {/*    <span className="page-link"*/}
                                        {/*          aria-hidden="true">&rsaquo;</span>*/}
                                        {/*</li>*/}
                                        {/*@endif*/}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    )
                    : <></>
            }

            {/*<div class="d-flex justify-content-between flex-fill d-sm-none">*/}
            {/*    <ul class="pagination">*/}
            {/*        {{-- Previous Page Link --}}*/}
            {/*        @if ($paginator->onFirstPage())*/}
            {/*        <li class="page-item disabled" aria-disabled="true">*/}
            {/*            <span class="page-link">@lang('pagination.previous')</span>*/}
            {/*        </li>*/}
            {/*        @else*/}
            {/*        <li class="page-item">*/}
            {/*            <a class="page-link" href="{{ $paginator->previousPageUrl() }}" rel="prev">@lang('pagination.previous')</a>*/}
            {/*        </li>*/}
            {/*        @endif*/}

            {/*        {{-- Next Page Link --}}*/}
            {/*        @if ($paginator->hasMorePages())*/}
            {/*        <li class="page-item">*/}
            {/*            <a class="page-link" href="{{ $paginator->nextPageUrl() }}" rel="next">@lang('pagination.next')</a>*/}
            {/*        </li>*/}
            {/*        @else*/}
            {/*        <li class="page-item disabled" aria-disabled="true">*/}
            {/*            <span class="page-link">@lang('pagination.next')</span>*/}
            {/*        </li>*/}
            {/*        @endif*/}
            {/*    </ul>*/}
            {/*</div>*/}

        </>
    )
}

export default PaginationList;