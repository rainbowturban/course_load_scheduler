package org.dselent.course_load_scheduler.client.presenter;

public interface ViewCoursesPresenter extends BasePresenter {
	//parent info
	public IndexPresenter getParentPresenter();
	public void setParentPresenter(IndexPresenter parentPresenter);

	//gets information about courses to fill the page with
	public void retrieveCourses();

	//injects the code for the variable element of the page into
	public void fillCourses();

	//loads the page to edit with the provided index/course
	public void loadEditPage();

	//loads the page to add a course
	public void loadAddPage();

	//sends the index of a course to be removed from the database.
	//returns true if it was removed successfully, false otherwise.
	public void removeCourse();

	//loads Home page
	void loadHomePage();

	//loads Schedule page
	void loadSchedulePage();

	//loads Course page
	void loadViewCoursesPage();

	//loads Account page
	void loadAccountPage();

}
