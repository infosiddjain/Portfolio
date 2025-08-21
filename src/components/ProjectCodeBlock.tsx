import React from "react";
import { Project } from "@/data/projects";

interface ProjectCodeBlockProps {
  project: Project;
}

export function ProjectCodeBlock({ project }: ProjectCodeBlockProps) {
  return (
    <div className="box-border border-indigo-900 overflow-hidden p-4 border-t-2 border-solid md:p-8">
      <code className="text-xs box-border leading-4 font-ui_monospace md:text-base md:leading-6">
        <div className="text-xs box-border leading-4 md:text-base md:leading-6">
          <span className="text-pink-500 text-xs box-border leading-4 mr-2 md:text-base md:leading-6">
            const
          </span>
          <span className="text-xs box-border leading-4 mr-2 md:text-base md:leading-6">
            project
          </span>
          <span className="text-pink-500 text-xs box-border leading-4 mr-2 md:text-base md:leading-6">
            =
          </span>
          <span className="text-gray-400 text-xs box-border leading-4 md:text-base md:leading-6">
            {"{"}
          </span>
        </div>
        <div className="text-xs box-border leading-4 md:text-base md:leading-6">
          <span className="text-xs box-border leading-4 ml-4 mr-2 md:text-base md:leading-6 md:ml-8">
            name:
          </span>
          <span className="text-gray-400 text-xs box-border leading-4 md:text-base md:leading-6">
            '
          </span>
          <span className="text-amber-300 text-xs box-border leading-4 md:text-base md:leading-6">
            {project.name}
          </span>
          <span className="text-gray-400 text-xs box-border leading-4 md:text-base md:leading-6">
            ',
          </span>
        </div>
        <div className="text-xs box-border leading-4 ml-4 mr-2 md:text-base md:leading-6 md:ml-8">
          <span className="text-xs box-border leading-4 md:text-base md:leading-6">
            tools:
          </span>
          <span className="text-gray-400 text-xs box-border leading-4 md:text-base md:leading-6">
            {" "}
            ['
          </span>
          {project.tools.map((tool, index) => (
            <React.Fragment key={tool}>
              <span className="text-amber-300 text-xs box-border leading-4 md:text-base md:leading-6">
                {tool}
              </span>
              <span className="text-gray-400 text-xs box-border leading-4 md:text-base md:leading-6">
                '
              </span>
              {index < project.tools.length - 1 && (
                <span className="text-gray-400 text-xs box-border leading-4 md:text-base md:leading-6">
                  , '
                </span>
              )}
            </React.Fragment>
          ))}
          <span className="text-gray-400 text-xs box-border leading-4 md:text-base md:leading-6">
            ],
          </span>
        </div>
        <div className="text-xs box-border leading-4 md:text-base md:leading-6">
          <span className="text-xs box-border leading-4 ml-4 mr-2 md:text-base md:leading-6 md:ml-8">
            myRole:
          </span>
          <span className="text-orange-400 text-xs box-border leading-4 md:text-base md:leading-6">
            {project.role}
          </span>
          <span className="text-gray-400 text-xs box-border leading-4 md:text-base md:leading-6">
            ,
          </span>
        </div>
        <div className="text-xs box-border leading-4 ml-4 mr-2 md:text-base md:leading-6 md:ml-8">
          <span className="text-xs box-border leading-4 md:text-base md:leading-6">
            Description:
          </span>
          <span className="text-cyan-400 text-xs box-border leading-4 md:text-base md:leading-6">
            {" "}
            {project.description}
          </span>
          <span className="text-gray-400 text-xs box-border leading-4 md:text-base md:leading-6">
            ,
          </span>
        </div>
        <div className="text-xs box-border leading-4 md:text-base md:leading-6">
          <span className="text-gray-400 text-xs box-border leading-4 md:text-base md:leading-6">
            {"};"}
          </span>
        </div>
      </code>
    </div>
  );
}
