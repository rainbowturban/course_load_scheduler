package org.dselent.course_load_scheduler.client.presenter.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.GetFrequenciesAction;
import org.dselent.course_load_scheduler.client.action.GetSectionsAction;
import org.dselent.course_load_scheduler.client.action.LoadAddSectionAction;
import org.dselent.course_load_scheduler.client.action.LoadEditSectionAction;
import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.action.SubmitEditCourseAction;
import org.dselent.course_load_scheduler.client.action.SubmitRemoveSectionAction;
import org.dselent.course_load_scheduler.client.event.GetFrequenciesEvent;
import org.dselent.course_load_scheduler.client.event.GetSectionsEvent;
import org.dselent.course_load_scheduler.client.event.LoadAddSectionEvent;
import org.dselent.course_load_scheduler.client.event.LoadEditCourseEvent;
import org.dselent.course_load_scheduler.client.event.LoadEditSectionEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.event.SubmitEditCourseEvent;
import org.dselent.course_load_scheduler.client.event.SubmitRemoveSectionEvent;
import org.dselent.course_load_scheduler.client.model.CourseInfo;
import org.dselent.course_load_scheduler.client.model.Courses;
import org.dselent.course_load_scheduler.client.model.Frequency;
import org.dselent.course_load_scheduler.client.model.SectionsInfo;
import org.dselent.course_load_scheduler.client.presenter.EditCoursePresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.EditCourseView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.StackPanel;
import com.google.inject.Inject;

public class EditCoursePresenterImpl extends BasePresenterImpl implements EditCoursePresenter{
	//implementations of the helpful functions from the interface
	
	private IndexPresenter parentPresenter;
	private EditCourseView view;
	
	//private int startingFrequencyIndex = -1;
	private CourseInfo course;
	private List<SectionsInfo> sections = new ArrayList<SectionsInfo>();
	
	
	@Inject
	public EditCoursePresenterImpl(IndexPresenter parentPresenter, EditCourseView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
		
		//fill the dropdown box
		fillFrequencies(-1);
		fillSections();
		
	}
	
	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;
		
		registration = eventBus.addHandler(LoadEditCourseEvent.TYPE, this);
		eventBusRegistration.put(LoadEditCourseEvent.TYPE, registration);
	}
	
	@Override
	public void onLoadEditCoursePage(LoadEditCourseEvent evt) {
		course = evt.getAction().getCourseInfo();
		
		//fill frequency tables, sections, and the fields with the information from the course
		if(course != null) {
			int index = fillFrequencies(course.getFrequencyId());
			fillSections();
			view.getCourseNameField().setText(course.getCoursesTitle());
			view.getCourseNumberField().setText(course.getCoursesNumber());
			view.getFrequencyDropdown().setSelectedIndex(index);
			
			this.go(parentPresenter.getView().getViewRootPanel());
		}
		else {
			Window.alert("A course must be selected to edit it.");
		}
		
	}
	
	@Override
	public void go(HasWidgets container) {
		container.clear();
		container.add(view.getWidgetContainer());
	}

	//returns the view for the presenter
	@Override
	public EditCourseView getView() {
		return view;
	}
	
	//parent info
	@Override
	public IndexPresenter getParentPresenter()
	{
		return parentPresenter;
	}
	@Override
	public void setParentPresenter(IndexPresenter parentPresenter)
	{
		this.parentPresenter = parentPresenter;
	}
	
	//gets values from DB 
	@Override
	public List<Frequency> retrieveFequencies() {
		//Sends event to DB to fetch frequencies
		eventBus.fireEvent(new GetFrequenciesEvent(new GetFrequenciesAction()));
		
		//**In place of that currently being completed, sample values are used
		List<Frequency> freqs = new ArrayList<Frequency>();
		
		Frequency f1 = new Frequency();
		f1.setFrequency("1 per year");
		f1.setId(1);
		
		Frequency f2 = new Frequency();
		f2.setFrequency("2 per year");
		f2.setId(2);
		
		Frequency f3 = new Frequency();
		f3.setFrequency("4 per year");
		f3.setId(4);
		
		freqs.add(f1);
		freqs.add(f2);
		freqs.add(f3);
		
		
		return freqs;
	}
	
	//gets the frequencies from the database and fills the dropdown with them. 
	@Override
	public int fillFrequencies(int startingFrequencyValue) {
		int startingFrequencyIndex = -1;
		List<Frequency> freqs = retrieveFequencies();

		ListBox box = view.getFrequencyDropdown();
		box.clear();
		
		Iterator<Frequency> iterator = freqs.iterator();
		
		int index = 0;
		while(iterator.hasNext()) {
			Frequency f = iterator.next();

			//add to frequency dropdown
			box.addItem(f.getFrequency(), Integer.toString(f.getId()));
			if(f.getId() == startingFrequencyValue) {
				startingFrequencyIndex = index;
			}
			index++;
		}
		
		return startingFrequencyIndex;
	}
	
	
	//gets the sections for this course and fills the list with them
	@Override
	public void retrieveSections() {
		//Sends event to DB to fetch sections
		Courses c = new Courses();
		c.setId(course.getCourseId());
		c.setTitle(course.getCoursesTitle());
		c.setNumber(course.getCoursesNumber());
		
		eventBus.fireEvent(new GetSectionsEvent(new GetSectionsAction(c)));
		
		//In place of that completing, Example values are used.
		sections = new ArrayList<SectionsInfo>();
		
		SectionsInfo s1 = new SectionsInfo();
		s1.setSectionType("Lab");
		s1.setTermsName("A");
		s1.setSectionsName("A01");
		
		SectionsInfo s2 = new SectionsInfo();
		s2.setSectionType("Conference");
		s2.setTermsName("A");
		s2.setSectionsName("A02");
		
		sections.add(s1);
		sections.add(s2);
		
	}
	
	
	//gets the sections for this course and fills the list with them
	@Override
	public void fillSections() {
		retrieveSections();

		StackPanel panel = view.getSectionList();
		panel.clear();
		
		Iterator<SectionsInfo> iterator = sections.iterator();
		while(iterator.hasNext()) {
			SectionsInfo s = iterator.next();

			//add to sections list
			Label label = new Label(s.getSectionType());
			panel.add(label, s.getSectionsName());

		}
	}
	
	
	@Override
	public boolean submitCourseEdit() {
		int fIndex = view.getFrequencyDropdown().getSelectedIndex();
		
		if(fIndex >= 0  && (view.getCourseNameField().getText().length() > 0) && (view.getCourseNumberField().getText().length() > 0)) {
			//since index is valid and fields are not empty, fill object
			Courses editCourse = new Courses();
			editCourse.setFrequencyID(Integer.parseInt(view.getFrequencyDropdown().getValue(fIndex)));
			editCourse.setTitle(view.getCourseNameField().getText());
			editCourse.setNumber(view.getCourseNumberField().getText());
			editCourse.setId(course.getCourseId());
			
			//this event should go to the DB
			eventBus.fireEvent(new SubmitEditCourseEvent(new SubmitEditCourseAction(editCourse)));

			return true;//returns if sending request was successful
		}
		else {//Frequency was not selected
			Window.alert("A Freqeuncy must be selected to edit a course, and no text fields can be empty.");
			return false;
		}
		
	}
	
	
	@Override
	public void returnToViewCourses() {
		LoadViewCoursesEvent evt = new LoadViewCoursesEvent(new LoadViewCoursesAction(true));
		eventBus.fireEvent(evt);
	}
	
	//sends request to remove section from the DB.
	@Override
	public void removeSection() {
		int index = view.getSectionList().getSelectedIndex();//what is to be removed? get the index.
		
		if(index >= 0) {
			Iterator<SectionsInfo> si = sections.listIterator(index);
			SectionsInfo s = si.next();
			
			eventBus.fireEvent(new SubmitRemoveSectionEvent(new SubmitRemoveSectionAction(s.getSectionsId())));

			boolean success = true;//this will be the return value from the request
			
			if(success) {
				view.getSectionList().remove(index);
			}
		}
	}
	
	@Override
	public void loadEditSectionPage() {
		int index = view.getSectionList().getSelectedIndex();
		if(index >= 0) {
			//create and send event:
			LoadEditSectionAction action = new LoadEditSectionAction();
			action.setCourseInfo(course);
			
			Iterator<SectionsInfo> si = sections.listIterator(index);
			
			SectionsInfo section = si.next();
			
			action.setSectionInfo(section);
			
			eventBus.fireEvent(new LoadEditSectionEvent(action));
		}
	}
	
	@Override
	public void loadAddSectionPage() {
		LoadAddSectionAction action = new LoadAddSectionAction();
		action.setCourseInfo(course);
		
		LoadAddSectionEvent evt = new LoadAddSectionEvent(action);
		eventBus.fireEvent(evt);
	}

}
