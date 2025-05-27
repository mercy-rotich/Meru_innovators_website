import React, { useState, useEffect } from "react";
import { Pencil, Trash2, PlusCircle, ExternalLink, Calendar, Users, Code, Eye } from "lucide-react";
import AdminAccountLayout from "../components/AdminDashboardLayout/AdminAccountLayout";

const initialProjects = [
  {
    id: 1,
    title: "Smart Agriculture IoT System",
    description: "An IoT-based solution for monitoring soil moisture, temperature, and humidity to optimize crop yield.",
    community: "Robotics & IoT",
    status: "Active",
    startDate: "2024-01-15",
    progress: 75,
    technologies: ["Arduino", "Sensors", "React", "Node.js"],
    githubUrl: "https://github.com/example/smart-agriculture",
    demoUrl: "https://smart-agri-demo.com"
  },
  {
    id: 2,
    title: "Digital Marketplace Platform",
    description: "A comprehensive e-commerce platform connecting local vendors with customers across Kenya.",
    community: "Web Development",
    status: "Completed",
    startDate: "2023-08-20",
    progress: 100,
    technologies: ["React", "Django", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/example/marketplace",
    demoUrl: "https://marketplace-demo.com"
  },
  {
    id: 3,
    title: "Mobile Health App",
    description: "A mobile application for remote health monitoring and telemedicine consultations.",
    community: "Android Development",
    status: "In Progress",
    startDate: "2024-03-10",
    progress: 60,
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/example/health-app",
    demoUrl: ""
  },
  {
    id: 4,
    title: "AI-Powered Education Platform",
    description: "Machine learning platform that personalizes learning experiences for students.",
    community: "Machine Learning",
    status: "Planning",
    startDate: "2024-06-01",
    progress: 25,
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    githubUrl: "",
    demoUrl: ""
  },
  {
    id: 5,
    title: "Cybersecurity Training Portal",
    description: "Interactive platform for cybersecurity awareness and training for students and faculty.",
    community: "Cybersecurity",
    status: "In Progress",
    startDate: "2024-02-20",
    progress: 45,
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
    githubUrl: "https://github.com/example/cyber-training",
    demoUrl: ""
  },
  {
    id: 6,
    title: "University Brand Identity System",
    description: "Complete brand identity and design system for university clubs and events.",
    community: "Graphics Design",
    status: "Active",
    startDate: "2024-04-05",
    progress: 80,
    technologies: ["Adobe Creative Suite", "Figma", "Canva"],
    githubUrl: "",
    demoUrl: "https://brand-system-demo.com"
  }
];

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [editProject, setEditProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [viewProject, setViewProject] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);

  useEffect(() => {
    setProjects([...initialProjects]);
  }, []);

  const handleEdit = (project) => {
    setEditProject({ ...project });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((project) => project.id !== id));
    }
  };

  const handleSave = () => {
    if (editProject.id && projects.find(p => p.id === editProject.id)) {
      // Update existing project
      setProjects(projects.map((p) => (p.id === editProject.id ? editProject : p)));
    } else {
      // Add new project
      const newProject = {
        ...editProject,
        id: Date.now(),
        technologies: editProject.technologies || []
      };
      setProjects([...projects, newProject]);
    }
    setShowModal(false);
    setEditProject(null);
  };

  const handleAddProject = () => {
    setEditProject({
      id: null,
      title: "",
      description: "",
      community: "",
      status: "Planning",
      startDate: "",
      progress: 0,
      technologies: [],
      githubUrl: "",
      demoUrl: ""
    });
    setShowModal(true);
  };

  const handleView = (project) => {
    setViewProject(project);
    setShowViewModal(true);
  };

  const handleTechnologyChange = (techString) => {
    const technologies = techString.split(',').map(tech => tech.trim()).filter(tech => tech);
    setEditProject({ ...editProject, technologies });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Completed": return "bg-blue-100 text-blue-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Planning": return "bg-purple-100 text-purple-800";
      case "On Hold": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCommunityColor = (community) => {
    const colors = {
      "Web Development": "bg-blue-100 text-blue-800",
      "Android Development": "bg-green-100 text-green-800",
      "Machine Learning": "bg-purple-100 text-purple-800",
      "Cybersecurity": "bg-red-100 text-red-800",
      "Robotics & IoT": "bg-orange-100 text-orange-800",
      "Cloud Computing": "bg-cyan-100 text-cyan-800",
      "Graphics Design": "bg-pink-100 text-pink-800",
      "Data Science": "bg-indigo-100 text-indigo-800",
    };
    return colors[community] || "bg-gray-100 text-gray-800";
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <AdminAccountLayout>
      <div className="p-[0.5rem] bg-gray-50 min-h-screen">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Manage Projects</h2>
            <p className="text-gray-600">Oversee and manage all community innovation projects</p>
          </div>
          <button
            onClick={handleAddProject}
            className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 flex items-center gap-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <PlusCircle size={20} />
            Add Project
          </button>
        </div>

        {/* Projects Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Total Projects</h3>
            <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Active Projects</h3>
            <p className="text-2xl font-bold text-green-600">
              {projects.filter(p => p.status === 'Active' || p.status === 'In Progress').length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Completed</h3>
            <p className="text-2xl font-bold text-blue-600">
              {projects.filter(p => p.status === 'Completed').length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Communities</h3>
            <p className="text-2xl font-bold text-purple-600">
              {new Set(projects.map(p => p.community)).size}
            </p>
          </div>
        </div>
 {/* Projects Table */}
 <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <th className="p-4 text-left font-semibold">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-semibold">Project</span>
                      <span className="text-xs text-gray-500 font-normal">Title & Description</span>
                    </div>
                  </th>
                  <th className="p-4 text-left font-semibold">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-semibold">Community</span>
                      <span className="text-xs text-gray-500 font-normal">Responsible Team</span>
                    </div>
                  </th>
                  <th className="p-4 text-left font-semibold">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-semibold">Status</span>
                      <span className="text-xs text-gray-500 font-normal">Current State</span>
                    </div>
                  </th>
                  <th className="p-4 text-left font-semibold">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-semibold">Progress</span>
                      <span className="text-xs text-gray-500 font-normal">Completion %</span>
                    </div>
                  </th>
                  <th className="p-4 text-left font-semibold">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-semibold">Start Date</span>
                      <span className="text-xs text-gray-500 font-normal">Project Launch</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-semibold">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-semibold">Actions</span>
                      <span className="text-xs text-gray-500 font-normal">Manage Project</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project, index) => (
                  <tr
                    key={project.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="p-4">
                      <div className="max-w-xs">
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm">{project.title}</h3>
                        <p className="text-xs text-gray-600 line-clamp-2">{project.description}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCommunityColor(project.community)}`}>
                        <Users size={14} className="mr-1" />
                        {project.community}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-500" />
                        <span className="text-sm text-gray-900">{project.startDate}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleView(project)}
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleEdit(project)}
                          className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-150"
                          title="Edit Project"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150"
                          title="Delete Project"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add/Edit Project Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">
                  {editProject?.id ? "Edit Project" : "Add New Project"}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        value={editProject?.title || ""}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter project title"
                        onChange={(e) =>
                          setEditProject({ ...editProject, title: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Community *
                      </label>
                      <select
                        value={editProject?.community || ""}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        onChange={(e) =>
                          setEditProject({ ...editProject, community: e.target.value })
                        }
                      >
                        <option value="">Select Community</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Android Development">Android Development</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Robotics & IoT">Robotics & IoT</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="Graphics Design">Graphics Design</option>
                        <option value="Data Science">Data Science</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Status
                        </label>
                        <select
                          value={editProject?.status || "Planning"}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          onChange={(e) =>
                            setEditProject({ ...editProject, status: e.target.value })
                          }
                        >
                          <option value="Planning">Planning</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Active">Active</option>
                          <option value="Completed">Completed</option>
                          <option value="On Hold">On Hold</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Progress (%)
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={editProject?.progress || 0}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          onChange={(e) =>
                            setEditProject({ ...editProject, progress: parseInt(e.target.value) || 0 })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={editProject?.startDate || ""}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        onChange={(e) =>
                          setEditProject({ ...editProject, startDate: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Description *
                      </label>
                      <textarea
                        value={editProject?.description || ""}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                        placeholder="Describe the project..."
                        onChange={(e) =>
                          setEditProject({ ...editProject, description: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Technologies Used
                      </label>
                      <input
                        type="text"
                        value={editProject?.technologies?.join(', ') || ""}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., React, Node.js, MongoDB (comma separated)"
                        onChange={(e) => handleTechnologyChange(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          GitHub URL
                        </label>
                        <input
                          type="url"
                          value={editProject?.githubUrl || ""}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="https://github.com/username/project"
                          onChange={(e) =>
                            setEditProject({ ...editProject, githubUrl: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Demo URL
                        </label>
                        <input
                          type="url"
                          value={editProject?.demoUrl || ""}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="https://project-demo.com"
                          onChange={(e) =>
                            setEditProject({ ...editProject, demoUrl: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setEditProject(null);
                  }}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-150"
                >
                  {editProject?.id ? "Update Project" : "Create Project"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* View Project Modal */}
        {showViewModal && viewProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{viewProject.title}</h3>
                    <div className="flex items-center gap-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(viewProject.status)}`}>
                        {viewProject.status}
                      </span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCommunityColor(viewProject.community)}`}>
                        <Users size={14} className="mr-1" />
                        {viewProject.community}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowViewModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Users size={16} className="text-gray-500" />
                          <span className="font-medium">Community:</span>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCommunityColor(viewProject.community)}`}>
                            {viewProject.community}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar size={16} className="text-gray-500" />
                          <span className="font-medium">Start Date:</span>
                          <span>{viewProject.startDate}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Progress</h4>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${getProgressColor(viewProject.progress)}`}
                            style={{ width: `${viewProject.progress}%` }}
                          ></div>
                        </div>
                        <span className="font-semibold text-gray-900">{viewProject.progress}%</span>
                      </div>
                    </div>

                    {viewProject.technologies && viewProject.technologies.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {viewProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                            >
                              <Code size={14} className="mr-1" />
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Description</h4>
                      <p className="text-gray-700 leading-relaxed">{viewProject.description}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Links</h4>
                      <div className="space-y-2">
                        {viewProject.githubUrl && (
                          <a
                            href={viewProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <Code size={16} />
                            <span>View Source Code</span>
                            <ExternalLink size={14} />
                          </a>
                        )}
                        {viewProject.demoUrl && (
                          <a
                            href={viewProject.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <ExternalLink size={16} />
                            <span>View Live Demo</span>
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setShowViewModal(false)}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-150"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminAccountLayout>
  );
};

export default AdminProjects;