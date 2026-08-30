from ticfyi.app import app


__all__: tuple[str, ...] = ()


def main() -> None:
    import uvicorn

    uvicorn.run("ticfyi.app:app", reload=True)
