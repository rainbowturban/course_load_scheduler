package org.dselent.course_load_scheduler.client.presenter;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.CourseInfo;

public interface ViewCoursesPresenter extends BasePresenter {
	//parent info
	public IndexPresenter getParentPresenter();
	public void setParentPresenter(IndexPresenter parentPresenter);
	
	//gets information about courses to fill the page with
	public List<CourseInfo> retrieveCourses();
	
	//injects the code for the variable element of the page into
	public void fillCourses();
	
	//loads the page to edit with the provided index/course (TODO: work out parameters)
	public void loadEditPage(int courseIndex);
	
	//loads the page to add a course (TODO: work out parameters)
	public void loadAddPage(boolean admin);
	
}
