import React, { useState, useEffect } from "react";
import { Calendar, Users, Code, ExternalLink, Eye, Filter, Search, Star, GitFork } from "lucide-react";

import SubHero from "../../../components/users/Hero/SubHero";
import PageLayout from "../PageLayouts/PageLayout";

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
    demoUrl: "https://smart-agri-demo.com",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
    likes: 45,
    forks: 12
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
    demoUrl: "https://marketplace-demo.com",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    likes: 62,
    forks: 18
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
    demoUrl: "",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    likes: 38,
    forks: 9
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
    demoUrl: "",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    likes: 29,
    forks: 5
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
    demoUrl: "",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    likes: 33,
    forks: 7
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
    demoUrl: "https://brand-system-demo.com",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    likes: 51,
    forks: 14
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [likedProjects, setLikedProjects] = useState([]);

  useEffect(() => {
    setProjects([...initialProjects]);
    setFilteredProjects([...initialProjects]);
  }, []);

  useEffect(() => {
    let filtered = projects;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by community
    if (selectedCommunity !== "All") {
      filtered = filtered.filter(project => project.community === selectedCommunity);
    }

    // Filter by status
    if (selectedStatus !== "All") {
      filtered = filtered.filter(project => project.status === selectedStatus);
    }

    setFilteredProjects(filtered);
  }, [projects, searchTerm, selectedCommunity, selectedStatus]);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleLikeProject = (projectId, e) => {
    e.stopPropagation();
    if (likedProjects.includes(projectId)) {
      setLikedProjects(likedProjects.filter(id => id !== projectId));
      setProjects(projects.map(p => 
        p.id === projectId ? { ...p, likes: p.likes - 1 } : p
      ));
    } else {
      setLikedProjects([...likedProjects, projectId]);
      setProjects(projects.map(p => 
        p.id === projectId ? { ...p, likes: p.likes + 1 } : p
      ));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Completed": return "bg-blue-100 text-blue-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Planning": return "bg-purple-100 text-purple-800";
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

  const communities = ["All", ...new Set(projects.map(p => p.community))];
  const statuses = ["All", "Active", "In Progress", "Completed", "Planning"];

  return (
    <div className=" bg-gray-50">
      <PageLayout>
      <SubHero 
  title="Innovation Projects" 
  description="   Discover amazing projects created by our community members. From IoT solutions to web applications, 
            explore the innovative work being done at Meru University.."
  primaryButtonText="View All Projects"
  secondaryButtonText="Submit Project"
  onPrimaryClick={() => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }}
/>
        <div id="projects-section" className="min-h-screen bg-gray-50 py-12">
          {/* Header Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="text-center mb-8">
              
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-2xl font-bold text-blue-600">{projects.length}</h3>
                <p className="text-gray-600">Total Projects</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-2xl font-bold text-green-600">
                  {projects.filter(p => p.status === 'Active' || p.status === 'In Progress').length}
                </h3>
                <p className="text-gray-600">Active Projects</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-2xl font-bold text-purple-600">
                  {projects.filter(p => p.status === 'Completed').length}
                </h3>
                <p className="text-gray-600">Completed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-2xl font-bold text-orange-600">
                  {new Set(projects.map(p => p.community)).size}
                </h3>
                <p className="text-gray-600">Communities</p>
              </div>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search projects, technologies, or descriptions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                {/* Community Filter */}
                <div className="md:w-48">
                  <select
                    value={selectedCommunity}
                    onChange={(e) => setSelectedCommunity(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {communities.map(community => (
                      <option key={community} value={community}>{community}</option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div className="md:w-40">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
                <Filter size={16} />
                <span>Showing {filteredProjects.length} of {projects.length} projects</span>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => handleViewProject(project)}
                >
                  {/* Project Image */}
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={(e) => handleLikeProject(project.id, e)}
                        className={`p-2 rounded-full transition-colors ${
                          likedProjects.includes(project.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white bg-opacity-90 text-gray-600 hover:text-red-500'
                        }`}
                      >
                        <Star size={16} fill={likedProjects.includes(project.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                    {/* Community Tag */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCommunityColor(project.community)}`}>
                        <Users size={14} className="mr-1" />
                        {project.community}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm text-gray-600">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          <Code size={12} className="mr-1" />
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star size={14} />
                          <span>{project.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={14} />
                          <span>{project.forks}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{project.startDate}</span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewProject(project);
                        }}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                      >
                        <Eye size={14} />
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search size={64} className="mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>

          {/* Project Detail Modal */}
          {showModal && selectedProject && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-2 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status}
                    </span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCommunityColor(selectedProject.community)}`}>
                      <Users size={14} className="mr-1" />
                      {selectedProject.community}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Calendar size={16} className="text-gray-500" />
                          <span className="font-medium">Start Date:</span>
                          <span>{selectedProject.startDate}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <span className="font-medium">Progress: {selectedProject.progress}%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                              <div
                                className={`h-2 rounded-full ${getProgressColor(selectedProject.progress)}`}
                                style={{ width: `${selectedProject.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                          >
                            <Code size={14} className="mr-1" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Links</h3>
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                        >
                          <Code size={16} />
                          View Source Code
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {selectedProject.demoUrl && (
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink size={16} />
                          View Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </PageLayout>
    </div>
  );
};

export default Projects;