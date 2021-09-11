export class ApiResult<TResult> {
    docs?: TResult[];
    total?: number;
    limit?: number;
    offset?: number;
    page?: number;
    pages?: number;
}
