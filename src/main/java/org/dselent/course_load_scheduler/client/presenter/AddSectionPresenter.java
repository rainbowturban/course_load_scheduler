package org.dselent.course_load_scheduler.client.presenter;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.CourseSections;

public interface AddSectionPresenter extends BasePresenter{
	
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	void addSection();
	
	List<CourseSections> retrieveTerm();
	List<CourseSections> retrieveType();
	List<CourseSections> retrieveTime();
	void fillSectionTerms();
	void fillSectionTypes();
	void fillSectionStart();
	void fillSectionEnd();
	String determineDays();
	void cancelAddSection();

}
