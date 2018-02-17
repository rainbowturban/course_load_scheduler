package org.dselent.course_load_scheduler.client.presenter.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.LoadAddSectionAction;
import org.dselent.course_load_scheduler.client.action.LoadEditCourseAction;
import org.dselent.course_load_scheduler.client.action.LoadEditSectionAction;
import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.event.LoadAddSectionEvent;
import org.dselent.course_load_scheduler.client.event.LoadEditCourseEvent;
import org.dselent.course_load_scheduler.client.event.LoadEditSectionEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.gin.Injector;
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
		//**Extract the course info
		//**use it to fill the text fields and set the frequency
		//then fetch+display the sections
		//fill the dropdown box
		course = evt.getAction().getCourseInfo();
		
		int index = fillFrequencies(evt.getAction().getCourse().getFrequencyID());
		fillSections();
		view.getCourseNameField().setText(evt.getAction().getCourse().getTitle());
		view.getCourseNumberField().setText(evt.getAction().getCourse().getNumber());
		view.getFrequencyDropdown().setSelectedIndex(index);
		
		this.go(parentPresenter.getView().getViewRootPanel());
		
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
		
		//TODO: fetch frequencies from the DB
		//**In place of that, sample values are used
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
		//TODO:*** send event to get sections from database
		
		//In place of that, Example values are used.
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
		Courses updatedCourse = new Courses();
		updatedCourse.setTitle(view.getCourseNameField().getText());
		updatedCourse.setNumber(view.getCourseNumberField().getText());
		updatedCourse.setFrequencyID(Integer.parseInt(view.getFrequencyDropdown().getValue(view.getFrequencyDropdown().getSelectedIndex())));
		
		
		int fIndex = view.getFrequencyDropdown().getSelectedIndex();
		
		if(fIndex >= 0) {
			//since index is valid, fill object
			Courses editCourse = new Courses();
			editCourse.setFrequencyID(Integer.parseInt(view.getFrequencyDropdown().getValue(fIndex)));
			editCourse.setTitle(view.getCourseNameField().getText());
			editCourse.setNumber(view.getCourseNumberField().getText());
			editCourse.setId(0);//TODO: Get courseID on main page and pass it to this page via event??
			
			//TODO: send out to DB to edit!
			Window.alert("If this accesses the DB, it would send a request to edit a course with Name: "+editCourse.getTitle() +
					", Number: "+editCourse.getNumber() + ", FrequencyId: " + editCourse.getFrequencyID());
			
			
			return true;//returns if course adding was successful or not
		}
		else {//Frequency was not selected
			Window.alert("A Freqeuncy must be selected to edit a course.");
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
			//TODO: Send correct Index--for DB not just the clientSide
			boolean success = true;//this will be the return value from the request
			
			
			if(success) {
				view.getSectionList().remove(index);
			}
		}
	}
	
	@Override
	public void loadEditSectionPage() {
		int index = view.getSectionList().getSelectedIndex();
		//TODO: Make an event for this, to provide the name of the course and stuff, and the current section info
		if(index >= 0) {
			
			//create and send event:
			LoadEditSectionAction action = new LoadEditSectionAction();
			action.setCourseInfo(course);
			
		//	sections.listIterator(index);
			
			//action.setSectionInfo(new sectionsInfo());
			
			eventBus.fireEvent(new LoadEditSectionEvent(action));
			
			//&&&editSectionPresenter.go(parentPresenter.getView().getViewRootPanel());
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
