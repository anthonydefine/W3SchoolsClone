import React from "react";
import { Table } from "flowbite-react";


function CourseOverview(props) {
  return (
    <div className="grid md:grid-cols-2 items-center place-items-center my-12">
      {props.overviewImg ? 
      <div className="p-8">
        <img width="md:300px" src={props.overviewImg} />
      </div> : ""}
      <div className="md:w-3/5">
        <h1 className="text-left text-3xl font-bold mb-4">Course overview</h1>
        <Table hoverable={true} className="rounded-none shadow-none">
          <Table.Body className="divide-y">
            <Table.Row className="bg-white hover:bg-green-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                Exam fee:
              </Table.Cell>
              <Table.Cell>
                ${props.price}.00
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white hover:bg-green-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                Exam level:
              </Table.Cell>
              <Table.Cell>
                Foundational
              </Table.Cell>
            </Table.Row>
            {props.table.exam ? <Table.Row className="bg-white hover:bg-green-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                Certification exam:
              </Table.Cell>
              <Table.Cell>
                {props.table.exam}
              </Table.Cell>
            </Table.Row>
            : ""}
            <Table.Row className="bg-white hover:bg-green-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                Certification
              </Table.Cell>
              <Table.Cell>
                {props.table.certification}
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white hover:bg-green-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                Format:
              </Table.Cell>
              <Table.Cell>
                Self-Paced
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white hover:bg-green-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                Time to complete:
              </Table.Cell>
              <Table.Cell>
                {props.table.time}
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white hover:bg-green-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                Language:
              </Table.Cell>
              <Table.Cell>
                English
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white hover:bg-green-200">
              <Table.Cell className="font-medium text-gray-900">
                Prerequisites:
              </Table.Cell>
              <Table.Cell>
                {props.table.prerequisites}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  )
};

export default CourseOverview;