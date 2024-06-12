<%text>
"""
Revision ID: ${up_revision}
Revises: ${down_revision | None}
Create Date: ${create_date}

"""
</%text>
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = ${repr(up_revision)}
down_revision = ${repr(down_revision)}
branch_labels = None
depends_on = None


def upgrade():
    pass


def downgrade():
    pass
