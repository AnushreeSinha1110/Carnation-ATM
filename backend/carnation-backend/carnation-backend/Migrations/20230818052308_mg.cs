using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace carnation_backend.Migrations
{
    /// <inheritdoc />
    public partial class mg : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ToAid",
                table: "Transactions",
                type: "uniqueidentifier",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ToAid",
                table: "Transactions");
        }
    }
}
