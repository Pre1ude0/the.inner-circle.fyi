from http import HTTPStatus

from fastapi import APIRouter, HTTPException, Request
from fastapi.datastructures import URL
from fastapi.responses import RedirectResponse


from ticfyi.webring import WEB_RING_MEMBERS


__all__: tuple[str, ...] = (
    "router",
)


router = APIRouter()


@router.get("/ring")
async def ring(request: Request) -> RedirectResponse:
    return RedirectResponse(
        url="/",
        status_code=HTTPStatus.FOUND,
    )


@router.get("/ring/next")
async def ring_next(request: Request, from_url: str | None = None) -> RedirectResponse:
    if from_url is not None and from_url in WEB_RING_MEMBERS:
        current_index = WEB_RING_MEMBERS.index(from_url)
        next_index = (current_index + 1) % len(WEB_RING_MEMBERS)
        next_url = WEB_RING_MEMBERS[next_index]
        return RedirectResponse(
            url=URL(next_url).replace(scheme="https"),
            status_code=HTTPStatus.FOUND,
        )

    raise HTTPException(
        status_code=HTTPStatus.BAD_REQUEST,
        detail="Invalid 'from_url' parameter. It must be one of the webring members.",
    )


@router.get("/ring/back")
async def ring_back(request: Request, from_url: str | None = None) -> RedirectResponse:
    if from_url is not None and from_url in WEB_RING_MEMBERS:
        current_index = WEB_RING_MEMBERS.index(from_url)
        next_index = (current_index - 1) % len(WEB_RING_MEMBERS)
        next_url = WEB_RING_MEMBERS[next_index]
        return RedirectResponse(
            url=URL(next_url).replace(scheme="https"),
            status_code=HTTPStatus.FOUND,
        )

    raise HTTPException(
        status_code=HTTPStatus.BAD_REQUEST,
        detail="Invalid 'from_url' parameter. It must be one of the webring members.",
    )


@router.get("/ring/go-to")
async def ring_go_to(request: Request, member: str | None = None) -> RedirectResponse:
    if member is not None and member in WEB_RING_MEMBERS:
        return RedirectResponse(
            url=URL(member).replace(scheme="https"),
            status_code=HTTPStatus.FOUND,
        )

    raise HTTPException(
        status_code=HTTPStatus.BAD_REQUEST,
        detail="Invalid 'member' parameter. It must be one of the webring members.",
    )
