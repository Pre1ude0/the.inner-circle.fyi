from http import HTTPStatus

from fastapi import APIRouter, Request, Response

from ticfyi.templates import templates


__all__: tuple[str, ...] = (
    "router",
)


router = APIRouter()


@router.get("/")
async def root(request: Request) -> Response:
    return templates.serve_template(
        template_name="index.jinja2",
        status_code=HTTPStatus.OK,
        context={"request": request},
    )
